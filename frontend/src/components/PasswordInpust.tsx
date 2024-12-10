import { useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";

interface InputProps {
    value: string;
    type: string;
    placeholder: string;
    reference?: any;}

export const PasswordInput = ({ value, type, placeholder, reference }: InputProps) => {
    const [ isShowPassword, setIsShowPassword ] = useState(false);

    const toggleShowPassword = () => {
        setIsShowPassword(!isShowPassword)
    }
  return (
    <div className='relative flex flex-col gap-2'>
        <div className='pl-2'>{value}</div>
      
        <input
            className='w-60 rounded-lg shadow-sm h-10 p-4'
            type={isShowPassword ? 'text' : type}
            placeholder={placeholder} 
            ref={reference} 
          />
          
        <button className="absolute inset-y-11 right-4" onClick={() => toggleShowPassword()}>
            {isShowPassword 
            ? 
                <LuEye className="text-slate-500" /> 
            : 
                <LuEyeOff className="text-slate-500" />}
        </button>
    </div>
  )
}
