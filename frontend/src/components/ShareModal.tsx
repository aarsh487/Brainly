import { IoCloseSharp } from "react-icons/io5";
import { InputELement } from "./InputElement";
import { Button } from "./Button";
import { useState } from "react";
import { axiosInstance } from "../config";
import toast from "react-hot-toast";

interface ShareModalProp {
    onOpen: boolean;
    onClose: () => void;
}

export const ShareModal = ({ onOpen, onClose }: ShareModalProp) => {

    const [isOn, setIsOn] = useState(false);
    const [ value, setValue ] = useState<string>();

    const handleToggle = async() => {
        const newIsOn = !isOn;
        setIsOn(newIsOn);
        getShareLink(newIsOn);
        
    };

    const getShareLink = async(currentIsOn: boolean) => {
        if(currentIsOn){
            const resposnse = await axiosInstance.post('/api/brain/share', {
                share: true
            });
            if(resposnse.data){
                setValue(`https://brainly-n1pn.onrender.com/share/${resposnse.data.hash}`);
                toast.success("Link Created");
            }
        } else{
            await axiosInstance.post('/api/brain/share', {
                share: false
            });
            setValue("");
            toast.success("Removed");
        }
    };

    return (<div>
        {onOpen && <>
            <div className="w-full h-screen fixed top-0 left-0 flex justify-center bg-slate-200 opacity-65"></div>
            <div className="w-screen h-screen fixed top-0 left-0 flex justify-center items-center">
                <div className="w-72 h-72 bg-white rounded-lg flex flex-col items-center">
                    <div className="w-full flex justify-end">
                        <div className="p-2 text-slate-200 cursor-pointer absolute" onClick={onClose}>
                            <IoCloseSharp size={20} />
                        </div>
                    </div>
                    <h2 className="font-bold text-lg mt-4">Share memory</h2>
                    <div className="flex flex-col gap-6">
                        <div className="toggle-switch mt-6 ml-16" onClick={handleToggle}>
                            <div className={`switch ${isOn ? 'on' : 'off'}`}>
                                <div className="toggle-circle" />
                            </div>
                            <p>{isOn ? 'SHARE' : 'OFF'}</p>
                        </div>
                        <InputELement 
                            inputValue={value} 
                            value={"Link"} 
                            type={"text"} 
                            placeholder={"Link"} 
                        />
                        <Button 
                            onClick={() => navigator.clipboard.writeText(value as string)} 
                            variant={"pTypeButton"} 
                            value={"Copy"} 
                        />
                    </div>
                </div>
            </div>
        </>
        }
    </div>

    )
}
