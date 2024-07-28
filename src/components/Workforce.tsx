import React from "react";
import zoomImage from "../assets/img/fullscreen.png";
import workar from "../assets/img/construction-worker.png";
import workar1 from "../assets/img/construction-worker1.png";
import searsh1 from "../assets/img/searsh1.png"; 
import buttonIcon from "../assets/img/close.png"; 
function Workforce() {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-4 border-b flex items-center justify-between">
        <div className="flex items-center">
          <img src={workar1} alt="Worker Icon" className="h-5 w-5 mr-2" />
          <h2 className="text-xl font-semibold text-[#792E0D]">Workforce</h2>
        </div>
        <button className="p-2">
          <img src={buttonIcon} alt="Button Icon" className="h-5 w-5" />
        </button>
      </div>
      <div className="p-4">
        <div className="relative mb-4 flex items-center">
          <input
            type="text"
            placeholder="Search"
            className=" p-2 pl-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className=" right-2 top-2 p-2 ">
            <img src={searsh1} alt="Search" className="h-10 w-10" />
          </button>
        </div>
        <div className="text-sm text-gray-500 mb-2">
          In View <span className="font-semibold">234</span>
        </div>
        <div className=" bg-[#FDF0E6] p-2 rounded-md mb-4">
          <span className="text-[#B54708]">Some results are hidden</span>
          <button className="ml-2 text-sm text-[#B54708]">
            <div className="h-6 w-24 border-solid border-2 border-[#E8CDB8] text-[#B54708] bg-[#E8CDB8] rounded-md flex items-center justify-center space-x-2">
              <span>Zoom</span>
              <img src={zoomImage} alt="Zoom" className="h-5 w-5" />
            </div>
          </button>
        </div>
        <div className="space-y-2">
          <WorkerCard name="Jonathan Majors" status="Active" />
          <WorkerCard name="Jonathan Majors" status="Active" />
          <WorkerCard name="Jonathan Majors" status="Active" />
          <WorkerCard name="Jonathan Majors" status="Inactive" />
        </div>
        <button className="mt-4 w-full py-2 text-sm flex flex-end font-bold">
          + View More
        </button>
      </div>
    </div>
  );
}

interface WorkerCardProps {
  name: string;
  status: "Active" | "Inactive";
}

const WorkerCard: React.FC<WorkerCardProps> = ({ name, status }) => {
  return (
    <div className="flex items-center p-2 border rounded-md">
      <img src={workar} alt="Worker" className="w-10 h-10 rounded-full mr-2" />
      <div className="flex-1">
        <div className="font-semibold">{name}</div>
        <div className="text-sm text-gray-500">Worker Code</div>
      </div>
      <div className="text-right">
        <div
          className={`text-sm font-semibold ${
            status === "Active" ? "text-green-500" : "text-red-500"
          }`}
        >
          {status}
        </div>
        <div className="text-sm text-gray-500">Space A </div>
      </div>
    </div>
  );
};

export default Workforce;
