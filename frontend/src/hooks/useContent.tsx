import axiosInstance from "../config"
import { useEffect, useState } from "react";

interface Content {
    userId: number;
    title: string;
    type: "twitter" | "youtube";
    link: string;
  }

export const useContent = () => {
    const [ contents, setContents ] = useState<Content[]>([]);
    const [ loading, setLoading ] = useState(false);
    async function refresh() {
        const response = await axiosInstance.get(`/api/content`);
        if(response){
            setContents([...response.data.content]);
            return;
        }
    };

    const onDelete = async() => {
        setLoading(true)
        await axiosInstance.delete('/api/content');
        setLoading(false)
    }

    useEffect(() => {
        refresh();
    },[loading]);

    return { contents, refresh, onDelete};
};
