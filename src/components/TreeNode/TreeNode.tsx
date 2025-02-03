import { useState } from 'react';
import { FolderProps, TreeNodeProps } from '../../types';
import getFileIcon from '../../utils/fileIcons';
import arrowDown from '../../assets/arrowDown.svg';
import arrowRight from '../../assets/arrowRight.svg';
import closeButton from '../../assets/x.svg';

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
      {item.type === 'project' ? (
      <div className="tree-node-content project" onClick={hasChildren ? toggleExpand : undefined}>
        {hasChildren && (
          <div className="arrow-icon">
            <img src={isExpanded ? arrowDown : arrowRight} alt="arrow" />
          </div>
        )}
        <img src={getIcon()}></img>
        {item.type === 'project' ? (
          <span className="name project">{item.name.toUpperCase()}</span>
          ) : (
        <span className="name nodes">{item.name}</span>
          )}
        {item.type !== 'project' && (
        <button 
          className="remove-button" 
          onClick={handleRemove}
          title="Remove item"
        >
          <img src={closeButton}/>
        </button>
)}
      </div>
      ) : (
        <div className="tree-node-content" onClick={hasChildren ? toggleExpand : undefined}>
          {hasChildren && (
            <div className="arrow-icon">
              <img src={isExpanded ? arrowDown : arrowRight} alt="arrow" />
            </div>
          )}
          <img src={getIcon()}></img>
          <span className="name">{item.name}</span>
          <button 
            className="remove-button" 
            onClick={handleRemove}
            title="Remove item"
          >
            <img src={closeButton}></img>
          </button>
        </div>
      )}
      {hasChildren && isExpanded && (
        <div className="tree-node-children">
          {(item as | FolderProps).children?.map((child) => (
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