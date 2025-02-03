import _ from 'lodash';
import { useState, useEffect } from 'react';
import TreeNode from '../TreeNode/TreeNode';
import { ProjectProps } from '../../types';
import api from '../../api/api';

const FileExplorer = () => {
    const [data, setData] = useState<ProjectProps | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const treeData = await api.getDirectoryTree();
                setData(treeData as ProjectProps);
            } catch (err) {
                setError('Failed to load directory tree');
                console.error('Failed to load directory tree:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleRemove = async (id: string) => {
        try {
            // First call the API to delete the item
            await api.deleteById(id);
            
            // Then update the local state using the same recursive logic
            const removeItem = (items: ProjectProps): ProjectProps | null => {
                if (_.isEqual(items.id, id)) return null;
                if (!_.isEmpty(items.children)) {
                    const newChildren = _.chain(items.children)
                        .map(child => removeItem(child))
                        .compact()
                        .value();
                    return { ...items, children: newChildren };
                }
                return items;
            };
            
            if (data) {
                const updatedTree = removeItem(_.cloneDeep(data));
                if (!_.isNull(updatedTree)) {
                    setData(updatedTree);
                }
            }
        } catch (err) {
            console.error('Failed to delete item:', err);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (!data) {
        return <div>No data available</div>;
    }

    return (
        <div className="file-explorer">
            <TreeNode item={data} level={0} onRemove={handleRemove} />
        </div>
    );
};

export default FileExplorer;
