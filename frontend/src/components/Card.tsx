import { GrDocumentText } from "react-icons/gr";
import { GoShareAndroid } from "react-icons/go";
import { RiDeleteBin6Line } from "react-icons/ri";
import { PiYoutubeLogo } from "react-icons/pi";
import { CiTwitter } from "react-icons/ci";
import { useContent } from "../hooks/useContent";
import toast from "react-hot-toast";

interface CardProps {
    key: string;
    title: string;
    type: "twitter" | "youtube" | "document";
    link: string;
    onDelete?: () => void;
}

export const Card = ({title, type, link, onDelete} : CardProps) => {
    const { user } = useContent();
  return (
    <div className='max-w-72 min-w-72 min-h-48 border border-gray-200 rounded-lg bg-white p-3'>
        <div className="flex justify-between p-2">
            <div className="flex justify-between items-center gap-3">
                {type==="youtube" && <PiYoutubeLogo size={20} className="text-gray-500" />}
                {type==="twitter" && <CiTwitter size={20} className="text-gray-500" />}
                {type==="document" && <GrDocumentText size={20} className="text-gray-500" />}
                <span className="font-semibold text-xl">{title}</span>
            </div>
            <div className="flex justify-between items-center gap-4 text-gray-500">
                <a href={link} target="_blank">
                    <GoShareAndroid />
                </a>
                {user ? <RiDeleteBin6Line className="cursor-pointer" onClick={onDelete} /> : 
                    <RiDeleteBin6Line className="cursor-pointer" onClick={() => toast.error("Not authorized")} />}
            </div>
        </div>
        <div className="pt-4">
            {type === "youtube" && <iframe
                                        className="w-full"
                                        src={link.replace("watch", "embed")}
                                        title="YouTube video player" 
                                        frameBorder="0" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                        referrerPolicy="strict-origin-when-cross-origin" 
                                        allowFullScreen>
                                    </iframe>}
            {type === "twitter" && <blockquote 
                                        className="twitter-tweet">
                                        <a href={link.replace("x.com", "twitter.com")}></a> 
                                    </blockquote>}
        </div>
    </div>
  )
}
