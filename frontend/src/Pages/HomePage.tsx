import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Sidebar } from "../components/Sidebar";
import { FiPlus } from "react-icons/fi";
import { GoShareAndroid } from "react-icons/go";
import { useContent } from "../hooks/useContent";
import { useEffect, useState } from "react";
import { CreateContentModal } from "../components/CreateContentModal";
import { ShareModal } from "../components/ShareModal";

export const HomePage = () => {

  const { contents, refresh, deleteCard } = useContent();
  const [ contentModalOpen, setContentModalOpen ] = useState(false);
  const [ shareModalOpen, setShareModalOpen ] = useState(false);

  useEffect(() => {
    refresh();
  },[contentModalOpen])

  return (
    <div className="h-screen w-full bg-slate-50">
      <div className="flex flex-col">
        <Sidebar />
      </div>
      <CreateContentModal onOpen={contentModalOpen} onClose={() => setContentModalOpen(false)} />
      <ShareModal onOpen={shareModalOpen} onClose={() => setShareModalOpen(false)} />
      <div className="flex flex-col gap-8 ml-80 mt-12 mr-8">
        <div className="flex justify-between">
          <span className="text-2xl font-bold">All Notes</span>
          <div className="flex justify-around gap-4">
            <Button onClick={() => setShareModalOpen(true)} icon={<GoShareAndroid size={25} />} variant={"secondary"} value={"Share Brain"} />
            <Button onClick={() => setContentModalOpen(true)} icon={<FiPlus size={25} />} variant={"primary"} value={"Add Content"} />
          </div>
        </div>
        <div className="flex gap-4 flex-wrap">
          {contents.map(({_id, type, link, title }) => <Card 
            key={_id}
            type={type}
            link={link}
            title={title}
            onDelete={() => {deleteCard(_id)}}
          />)}
        </div>
      </div>
    </div>
  )
};