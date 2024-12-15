import { RiBrainFill } from "react-icons/ri";
import { SIdebarItem } from "./SIdebarItem";
import { PiYoutubeLogo } from "react-icons/pi";
import { CiTwitter } from "react-icons/ci";
import { GrDocumentText } from "react-icons/gr";
import { IoIosLogOut } from "react-icons/io";
import { useContent } from "../hooks/useContent";

export const Sidebar = () => {
  const { logout } = useContent();

  const handleLogout = () => {
    logout();
  }
  return (
    <div className="h-screen sm:w-72 w-20 border-r fixed top-0 left-0 bg-white transition-all ease-in-out duration-150">
        <div className='flex sm:ml-5 ml-2 mt-4 items-center gap-2 transition-all ease-in-out duration-150'>
            <RiBrainFill size={50} className='text-purple-300' />
            <h1 className='sm:block hidden text-3xl font-bold transition-all ease-in-out duration-150'>Brainly</h1>
        </div>
        <div className="sm:pl-4 pl-1 pt-8 flex flex-col gap-4 transition-all ease-in-out duration-150">
            <SIdebarItem icon={<PiYoutubeLogo size={25} />} value={"Youtube"} />
            <SIdebarItem icon={<CiTwitter size={25} />} value={"Twitter"} />
            <SIdebarItem icon={<GrDocumentText  size={20} />} value={"Documents"} />
            <SIdebarItem onClick={handleLogout} icon={<IoIosLogOut size={20} />} value={"Logout"} />
        </div>
    </div>
  )
}
