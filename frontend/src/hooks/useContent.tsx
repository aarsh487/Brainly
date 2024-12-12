import { axiosInstance } from "../config"
import { useEffect, useState } from "react";

interface Content {
    _id: string;
    userId: number;
    title: string;
    type: "twitter" | "youtube";
    link: string;
  }

export const useContent = () => {
    const [ contents, setContents ] = useState<Content[]>([]);
    async function refresh() {
        const response = await axiosInstance.get(`/api/content`);
        if(response){
            setContents([...response.data.content]);
            return;
        }
    };

    const deleteCard = async(_id: string) => {
        const contentId = _id;
        await axiosInstance.delete('/api/content/' + contentId);
        refresh();
     
    };

    useEffect(() => {
        refresh();
        return () => {}
    },[]);

    return { contents, refresh, deleteCard};
};
