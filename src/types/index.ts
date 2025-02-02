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
  