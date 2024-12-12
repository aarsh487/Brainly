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
    const [isAuth, setIsAuth ] = useState(false);

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

    const checkAuth = async() => {
        const response = await axiosInstance.get('/api/user/');
        if(response.data.success){
            setIsAuth(true)
        } else{
            setIsAuth(false)
        }
    };

    useEffect(() => {
        refresh();
        return () => {}
    },[]);

    return { contents, refresh, deleteCard, checkAuth, isAuth};
};
