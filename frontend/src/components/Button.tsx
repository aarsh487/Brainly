import { ReactElement } from "react";

interface ButtonProps {
    value: string;
    onClick?: () => void;
    variant: "primary" | "secondary" | "tertiary" | "pTypeButton" | "sTypeButton";
    icon?: ReactElement;
}

const variantClasses = {
  "primary": "w-40 h-11 bg-purple-300 text-white rounded-lg flex justify-center items-center gap-2",
  "secondary": "w-40 h-11 bg-purple-200 text-purple-500 rounded-lg flex justify-center items-center gap-2",
  "tertiary" : "w-60 h-10 bg-purple-300 text-white rounded-sm ",
  "pTypeButton": "w-24 h-8 bg-purple-300 text-md text-white rounded-md flex justify-center items-center",
  "sTypeButton": "w-24 h-8 bg-purple-200 text-md text-purple-500 rounded-md flex justify-center items-center"
}

const defalultStyles = "font-medium"

export const Button = ({value, onClick, variant, icon}: ButtonProps) => {
  return (
    <div className='flex justify-center items-center'>
        <button
            onClick={onClick}
            className={variantClasses[variant] + " " + defalultStyles }
        >
          <div>
            {icon}
          </div>
            {value}
        </button>
    </div>
  )
}
