declare module "../api/api" {
  export type DirectoryTree = {
    id: string;
    type: "file" | "folder" | "project";
    name: string;
    children?: DirectoryTree[];
  };

  const api: {
    getDirectoryTree: () => Promise<DirectoryTree>;
    deleteById: (id: string) => Promise<DirectoryTree>;
  };

  export default api;
}
