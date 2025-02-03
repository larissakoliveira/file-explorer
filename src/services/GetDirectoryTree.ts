import { useEffect, useState } from "react";
import { ProjectProps } from "../types";
import api from "../api/api";

const getDirectoryTreeService = () => {

    const [data, setData] = useState<ProjectProps | null>(null);
    
    // Fetch the directory tree on component mount
    useEffect(() => {
        const fetchDirectoryTree = async () => {
            try {
                const directoryTree = await api.getDirectoryTree();
                setData(directoryTree);
            } catch (err) {
                console.error('Failed to fetch directory tree:', err);
            }
        };

        fetchDirectoryTree();
    }, []);  // Empty dependency array to fetch only on mount
};

export default getDirectoryTreeService;