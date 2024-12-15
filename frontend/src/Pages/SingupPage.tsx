import { Link } from 'react-router-dom';
import imgurl from '../assets/images/signupimg2.png';
import { Button } from '../components/Button';
import { InputELement } from '../components/InputElement';
import { RiBrainFill } from "react-icons/ri";
import { PasswordInput } from '../components/PasswordInpust';
import { useRef } from 'react';
import { UserDataType } from '../types/userdata';
import { useContent } from '../hooks/useContent';

export const SingupPage = () => {
    const userNameRef = useRef<HTMLInputElement>();
    const emailRef = useRef<HTMLInputElement>();
    const passwordRef = useRef<HTMLInputElement>();

    const { signup } = useContent();

    const handleSignup = async () => {
        const userData: UserDataType = {
            name: userNameRef.current?.value || "",
            email: emailRef.current?.value || "",
            password: passwordRef.current?.value || ""
        }
        signup(userData)

    };

    return (
        <div className='h-screen w-full bg-slate-100 flex justify-center items-center'>
            <div className='w-11/12 flex justify-between shadow-lg rounded-md'>
                {/* left side  */}
                <div className='w-full sm:w-1/2 flex flex-col sm:py-0 py-6 transition-all ease-in duration-150'>
                    {/* ICON  */}
                    <div className='flex ml-8 mt-4 items-center gap-2'>
                        <RiBrainFill size={50} className='text-purple-300' />
                        <h1 className='text-3xl font-bold'>Brainly</h1>
                    </div>
                    <div className='flex justify-center mt-6'>
                        <div className='flex flex-col gap-2'>
                            <h2 className='text-3xl font-bold'>Create Account</h2>
                            <p className='text-sm text-slate-700 pl-2'>Please enter your details</p>
                        </div>
                    </div>

                    <div className='flex flex-col items-center gap-6 mt-8'>
                        <InputELement reference={userNameRef} value={"Fullname:"} type={"text"} placeholder={"John Smith"} />
                        <InputELement reference={emailRef} value={"Email address:"} type={"email"} placeholder={"Your@example.com"} />
                        <PasswordInput reference={passwordRef} value={"Password:"} type={"Password"} placeholder={"********"} />
                        <Button variant={"tertiary"} onClick={handleSignup} value={"Sign up"} />
                    </div>
                    <div className='flex justify-center gap-1 mt-2'>
                        <span className='text-sm'>Already have an account?{" "}</span>
                        <Link to="/login" className='text-purple-600 underline'>
                            Sign in
                        </Link>
                    </div>
                </div>
                {/* RIgntSide */}
                <div className='hidden sm:block w-1/2 bg-purple-300 flex flex-col items-center rounded-r-md transition-all ease-in-out duration-150'>
                    <img src={imgurl} />
                    <div className='text-white text-center mb-20'>
                        <h2 className='font-bold text-2xl'>Connect with the brain outside</h2>
                        <p>Everything you need in an easy customization dashboard</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
