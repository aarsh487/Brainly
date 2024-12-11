import { GrDocumentText } from "react-icons/gr";
import { GoShareAndroid } from "react-icons/go";
import { RiDeleteBin6Line } from "react-icons/ri";
import axiosInstance from "../config";
import { useContent } from "../hooks/useContent";
import { useEffect, useState } from "react";

interface CardProps {
    title: string;
    type: "twitter" | "youtube";
    link: string;
}

export const Card = ({title, type, link} : CardProps) => {

    const { refresh, onDelete } = useContent();

    const handleDelete = () => {
        onDelete();
    }

  return (
    <div className='max-w-72 min-w-72 min-h-48 border border-gray-200 rounded-lg bg-white p-3'>
        <div className="flex justify-between p-2">
            <div className="flex justify-between items-center gap-4">
                <GrDocumentText className="text-gray-500" />
                <span>{title}</span>
            </div>
            <div className="flex justify-between items-center gap-4 text-gray-500">
                <a href={link} target="_blank">
                    <GoShareAndroid />
                </a>
                <RiDeleteBin6Line onClick={handleDelete} />
            </div>
        </div>
        <div className="pt-4">
            {type === "youtube" && <iframe className="w-full" src={link.replace("watch", "embed").replace("?v=", "/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}
            {type === "twitter" && <blockquote className="twitter-tweet">
                    <a href={link.replace("x.com", "twitter.com")}></a> 
            </blockquote>}
        </div>
    </div>
  )
}
