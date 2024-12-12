import { IoCloseSharp } from "react-icons/io5";
import { InputELement } from "./InputElement";
import { Button } from "./Button";
import ToggleSwitch from "./ToggleButton";
import { useState } from "react";

interface ShareModalProp {
    onOpen: boolean;
    onClose: () => void;
}

export const ShareModal = ({ onOpen, onClose }: ShareModalProp) => {

    const [ isToggled, setIsToggled ] = useState(false);

    const handleChange = () => {
        setIsToggled(!isToggled)

    }
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
                        <ToggleSwitch label={"Share"} />
                        <InputELement value={"Link"} type={"text"} placeholder={"Link"} />
                        <Button variant={"pTypeButton"} value={"Copy"} />
                    </div>
                </div>
            </div>
        </>
        }
    </div>

    )
}
