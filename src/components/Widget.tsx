import { useState } from "react";
import blueprint from "../assets/img/blueprint.png";
import worker from "../assets/img/construction-worker.png";
import earth from "../assets/img/earth.png";
import layers from "../assets/img/layers.png";
import camera from "../assets/img/security-camera.png";
import view from "../assets/img/view.png";
import settings from "../assets/img/control.png";
import Vieweye from "./Vieweye";

const Widget = () => {
  const [showWorkforce, setShowWorkforce] = useState(false);

  return (
    <div className="fixed top-4 left-4 flex bg-white p-4 rounded-lg shadow-md z-50">
      <div className="space-y-6">
        <div className="space-y-4">
          <h2 className="text-sm font-semibold text-gray-600">Space:</h2>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img src={layers} alt="Layers" className="w-6 h-6" />
              <span className="font-medium">Space A</span>
            </div>
            <img src={view} alt="Eye" className="w-4 h-4 m-2" />
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-sm font-semibold text-gray-600">Resources:</h2>
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => setShowWorkforce(!showWorkforce)}
          >
            <div className="flex items-center space-x-2">
              <img src={worker} alt="Worker" className="w-6 h-6" />
              <span className="font-medium">Workforce</span>
            </div>
            <div className="flex space-x-4">
              <img src={settings} alt="Settings" className="w-4 h-4 ml-4" />
              <img src={view} alt="Eye" className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img src={camera} alt="Camera" className="w-6 h-6" />
              <span className="font-medium">Cameras</span>
            </div>
            <div className="flex space-x-4">
              <img src={settings} alt="Settings" className="w-4 h-4 ml-4" />
              <img src={view} alt="Eye" className="w-4 h-4" />
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="text-sm font-semibold text-gray-600">General:</h2>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img src={earth} alt="Earth" className="w-6 h-6" />
              <span className="font-medium">Base map</span>
            </div>
            <img src={view} alt="Eye" className="w-4 h-4 m-2" />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img src={blueprint} alt="Blueprint" className="w-6 h-6" />
              <span className="font-medium">Blueprint</span>
            </div>
            <img src={view} alt="Eye" className="w-4 h-4 m-2" />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img src={layers} alt="Layers" className="w-6 h-6" />
              <span className="font-medium">Zones</span>
            </div>
            <img src={view} alt="Eye" className="w-4 h-4 m-2" />
          </div>
        </div>
      </div>

      {showWorkforce && (
        <div className="fixed ml-20 bg-white rounded-lg shadow-md ">
          <Vieweye />
        </div>
      )}
    </div>
  );
};

export default Widget;
