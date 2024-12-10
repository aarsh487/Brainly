import { ReactElement } from "react";

interface SidebarItemProps {
    value: string;
    icon: ReactElement;
}

export const SIdebarItem = ({value, icon}: SidebarItemProps) => {
  return (
    <div className="flex items-center py-2 text-gray-700 cursor-pointer hover:bg-gray-200 rounded-md max-w-48 pl-4 transition-all duration-150 gap-4">
        <div>
            {icon}
        </div>
        <h4 className="text-xl">{value}</h4>
    </div>
  )
}
