import { Button } from "../components/Button"
import { Card } from "../components/Card";
import { Sidebar } from "../components/Sidebar";

export const HomePage = () => {
  return (
    <div className="h-screen w-full bg-slate-50">
      <div className="flex flex-col">
        <Sidebar />
      </div>
      <div className="flex flex-col gap-8 ml-80 mt-12">
        <div className="flex justify-between">
          <span className="text-2xl font-bold">All Notes</span>
          <div className="flex justify-around">
            <Button value={"Share Brain"} />
            <Button value={"Add Content"} />
          </div>
        </div>
        <div className="flex gap-4 flex-wrap">
          <Card />
        </div>
      </div>
    </div>
  )
};