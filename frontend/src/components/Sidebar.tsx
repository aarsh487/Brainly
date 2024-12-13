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
    <div className="h-screen w-72 border-r fixed top-0 left-0 bg-white">
        <div className='flex ml-5 mt-4 items-center gap-2'>
            <RiBrainFill size={50} className='text-purple-300' />
            <h1 className='text-3xl font-bold'>Brainly</h1>
        </div>
        <div className="pl-4 pt-8 flex flex-col gap-4">
            <SIdebarItem icon={<PiYoutubeLogo size={25} />} value={"Youtube"} />
            <SIdebarItem icon={<CiTwitter size={25} />} value={"Twitter"} />
            <SIdebarItem icon={<GrDocumentText  size={20} />} value={"Documents"} />
            <SIdebarItem onClick={handleLogout} icon={<IoIosLogOut size={20} />} value={"Logout"} />
        </div>
    </div>
  )
}
