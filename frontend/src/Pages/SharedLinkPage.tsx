import { useParams } from "react-router-dom";
import { Card } from "../components/Card";
import { Sidebar } from "../components/Sidebar";
import { useContent } from "../hooks/useContent";
import { useEffect } from "react";


export const SharedLinkPage = () => {

  const { contents, shareLink } = useContent();
  const { link } = useParams();


  useEffect(() => {
    if(link){
        shareLink(link);
        return;
    }
  },[link, shareLink])

  return (
    <div className="h-screen w-full bg-slate-50">
      <div className="flex flex-col">
        <Sidebar />
      </div>
      <div className="flex flex-col gap-8 sm:ml-80 ml-24 mt-12 mr-8">
        <div className="flex justify-between">
          <span className="text-2xl font-bold">All Notes</span>
        </div>
        <div className="flex gap-4 flex-wrap">
          {contents?.length > 0 ? (contents.map(({_id, type, link, title }) => <Card 
            key={_id}
            type={type}
            link={link}
            title={title}
          />)) : (
            <p className="mx-22 my-28 sm:mx-96 sm:my-52">No notes available to display.</p>
          )}
        </div>
      </div>
    </div>
  )
};