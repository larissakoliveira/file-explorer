import { useState } from 'react';
import { FolderProps, TreeNodeProps } from '../../types';
import getFileIcon from '../../utils/fileIcons';
import arrowDown from '../../assets/arrowDown.svg';
import arrowRight from '../../assets/arrowRight.svg';
import closeButton from '../../assets/x.svg';
import Button from '../Button/Button';

const TreeNode = ({ item, level, onRemove }: TreeNodeProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const hasChildren = 'children' in item && item.children && item.children.length > 0;

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const getIcon = () => {
    if (item.type === 'file') {
      return getFileIcon(item.name);
    }
  };

  const handleRemove = (e: React.MouseEvent) => {
    e.stopPropagation();
    onRemove(item.id);
  };

  return (
    <div className="tree-node" style={{ '--level-margin': `${level * 10}px` } as React.CSSProperties}>
      <div 
        className={`tree-node-content ${item.type === 'project' ? 'project' : ''}`}
        onClick={hasChildren ? toggleExpand : undefined}
      >
        {hasChildren && (
          <div className="arrow-icon">
            <img src={isExpanded ? arrowDown : arrowRight} alt="arrow" />
          </div>
        )}
        <img src={getIcon()} alt="" />
        <span className={`name ${item.type === 'project' ? 'project' : 'nodes'}`}>
          {item.type === 'project' ? item.name.toUpperCase() : item.name}
        </span>
        {item.type !== 'project' && (
          <Button
            className="remove-button"
            onRemove={handleRemove}
            title="Remove item"
            ariaLabel={`Remove ${item.name}`}
            buttonIcon={closeButton}
          />
        )}
      </div>
      {hasChildren && isExpanded && (
        <div className="tree-node-children">
          {(item as FolderProps).children?.map((child) => (
            <TreeNode
              key={child.id}
              item={child}
              level={level + 1}
              onRemove={onRemove}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TreeNode;