import ste from "../assets/imgs/control.png";
import eyeClosed from "../assets/imgs/eye.png";
import eyeOpen from "../assets/imgs/view.png";
import worker from "../assets/imgs/construction-worker.png";
import sitch from "../assets/imgs/switch.png";
import sitch1 from "../assets/imgs/switch1.png";
import React, { useState } from "react";

interface WorkforceItemProps {
  isHovered: boolean;
  isActive: boolean;
}

const WorkforceItem: React.FC<WorkforceItemProps> = ({
  isHovered,
  isActive,
}) => {
  const [isSwitched, setIsSwitched] = useState(false);

  const handleSwitchClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsSwitched(!isSwitched);
  };

  return (
    <div
      className={`p-4 rounded shadow-md cursor-pointer transition-all duration-300 ${
        isActive ? "h-auto" : "h-16"
      } w-64 bg-transparent`}
    >
      <div
        className={`flex items-center justify-between p-2 rounded ${
          isHovered ? "bg-[#ECECF3]" : "bg-gray-50"
        }`}
      >
        <div className="flex items-center space-x-2">
          <img className="h-5 w-5" src={worker} alt="Worker" />
          <span>Workforce</span>
        </div>
        <div className="flex items-center space-x-2 ml-auto">
          <img className="h-5 w-5" src={ste} alt="Settings" />
          <img
            className="h-5 w-5"
            src={isActive ? eyeOpen : eyeClosed}
            alt="View"
          />
        </div>
      </div>
      {isActive && (
        <div className="mt-2 p-2 bg-gray-100 rounded shadow-inner">
          <p className="mb-1 text-[#9A9B9C]">Status:</p>
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-[#17B26A] rounded-full m-1"></div>
              <span>Active</span>
            </div>
            <img className="h-5 w-5" src={eyeOpen} alt="View" />
          </div>
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-[#B54708] rounded-full m-1"></div>
              <span>Inactive</span>
            </div>
            <img className="h-5 w-5" src={eyeOpen} alt="View" />
          </div>
          <p className="mb-1 text-[#9A9B9C]">Type:</p>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-[#DC6803] rounded-full border border-white m-1"></div>
              <span>Cluster</span>
            </div>
            <img
              className="h-5 w-6 cursor-pointer"
              src={isSwitched ? sitch1 : sitch}
              alt="Switch"
              onClick={handleSwitchClick}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkforceItem;
