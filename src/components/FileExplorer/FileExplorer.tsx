import { useState } from 'react';
import _ from 'lodash';
import TreeNode from '../TreeNode/TreeNode';
import { FileExplorerProps, ProjectProps } from '../../types';

const FileExplorer = ({ data: initialData }: FileExplorerProps) => {
    const [data, setData] = useState<ProjectProps>(initialData);

    const handleRemove = async (id: string) => {
        try {
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
          
          const updatedTree = removeItem(_.cloneDeep(data));
          if (!_.isNull(updatedTree)) {
            setData(updatedTree);
          }
        } catch (err) {
          console.error('Failed to delete item:', err);
        }
      };

    return (
        <div className="file-explorer">
          <TreeNode item={data} level={0} onRemove={handleRemove} />
        </div>
      );
  
};

export default FileExplorer;