import { useRef, useState } from "react";
import { Button } from "./Button";
import { InputELement } from "./InputElement"
import { IoCloseSharp } from "react-icons/io5";
import { axiosInstance } from "../config";
import toast from "react-hot-toast";


interface ContentModalProps {
    onOpen: boolean;
    onClose: () => void;
}

enum ContentType {
    YouTube = "youtube",
    Twitter = "twitter",
    Document = "document"
}


export const CreateContentModal = ({onOpen, onClose}: ContentModalProps) => {

    const [ type, setType ] = useState(ContentType.YouTube);

    const titleRef = useRef<HTMLInputElement>();
    const linkRef = useRef<HTMLInputElement>();

    const createContent = async() => {
        const title = titleRef.current?.value;
        const link = linkRef.current?.value;
        await axiosInstance.post(`/api/content/create`, {
            title,
            link,
            type
        });
        onClose();
        toast.success("Ceated");
    };

  return (<div>
    {onOpen && <>
            <div className="w-full h-screen fixed top-0 left-0 flex justify-center bg-slate-200 opacity-65"></div>
            <div className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center">
                <div className="w-96 h-96 bg-white rounded-lg flex flex-col items-center">
                    <div className="w-full flex justify-end">
                        <div className="p-2 text-slate-200 cursor-pointer absolute" onClick={onClose}>
                            <IoCloseSharp size={20}/>
                        </div>
                    </div>
                    <h2 className="font-bold text-lg mt-4">Create a memory</h2>
                    <div className="flex flex-col items-center justify-center gap-6 mt-8">
                        <InputELement reference={titleRef} value={"Title"} type={"text"} placeholder={"Title"} />
                        <InputELement reference={linkRef} value={"Link"} type={"text"} placeholder={"URL"} />
                    </div>
                    <div className="flex gap-2 mt-4 flex-wrap">
                        <Button value={"Youtube"} variant={type === ContentType.YouTube ? "pTypeButton" : "sTypeButton"} onClick={() => {setType(ContentType.YouTube)}}  />
                        <Button value={"Twitter"} variant={type === ContentType.Twitter ? "pTypeButton" : "sTypeButton"} onClick={() => {setType(ContentType.Twitter)}}  />
                        <Button value={"Document"} variant={type === ContentType.Document ? "pTypeButton" : "sTypeButton"} onClick={() => {setType(ContentType.Document)}}  />
                    </div>
                    <div className="mt-4">
                        <Button value={"Create"} variant={"tertiary"} onClick={createContent} />
                    </div> 
                </div>
            </div>
        </> 
     }
    </div>
   
  )
};
