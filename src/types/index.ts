export interface TreeNode {
  id: string;
  type: "project" | "folder" | "file";
  name: string;
  children?: TreeNode[];
}

export interface TreeNodeProps {
  item: ProjectProps | FolderProps | FileProps;
  level: number;
  onRemove: (id: string) => void;
}

export interface ProjectProps {
  id: string;
  type: string;
  name: string;
  children?: (FolderProps | FileProps)[];
}

export interface FolderProps {
  id: string;
  type: string;
  name: string;
  children?: (FolderProps | FileProps)[];
}

export interface FileProps {
    id: string;
    type: string;
    name: string;
  }
  