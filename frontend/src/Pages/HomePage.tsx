import { Button } from "../components/Button"
import { Card } from "../components/Card";
import { Sidebar } from "../components/Sidebar";
import { FiPlus } from "react-icons/fi";
import { GoShareAndroid } from "react-icons/go";
import { useContent } from "../hooks/useContent";
import { useEffect, useState } from "react";
import { CreateContentModal } from "../components/CreateContentModal";

export const HomePage = () => {

  const { contents, refresh } = useContent();
  const [ modalOpen, setModalOpen ] = useState(false);

  useEffect(() => {
    refresh();
  },[modalOpen])

  return (
    <div className="h-screen w-full bg-slate-50">
      <div className="flex flex-col">
        <Sidebar />
      </div>
      <CreateContentModal onOpen={modalOpen} onClose={() => setModalOpen(false)} />
      <div className="flex flex-col gap-8 ml-80 mt-12 mr-8">
        <div className="flex justify-between">
          <span className="text-2xl font-bold">All Notes</span>
          <div className="flex justify-around gap-4">
            <Button icon={<GoShareAndroid size={25} />} variant={"secondary"} value={"Share Brain"} />
            <Button onClick={() => setModalOpen(true)} icon={<FiPlus size={25} />} variant={"primary"} value={"Add Content"} />
          </div>
        </div>
        <div className="flex gap-4 flex-wrap">
          {contents.map(({ type, link, title }) => <Card 
            type={type}
            link={link}
            title={title}
          />)}
        </div>
      </div>
    </div>
  )
};