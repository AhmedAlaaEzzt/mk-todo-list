import { useState } from "react";
import layers from "../assets/imgs/layers.png";
import viewIcon from "../assets/imgs/view.png";
import worker from "../assets/imgs/worker.png";
import settings from "../assets/imgs/settings.png";
import camera from "../assets/imgs/security-camera.png";
import earth from "../assets/imgs/earth.png";
import blueprint from "../assets/imgs/blueprint.png";
import SupWidget from "./SupWidget";
import WidgetSpas from "./widgetSpas";
import MapView from "@arcgis/core/views/MapView";

interface WorkforceProps {
  id: string;
  view: MapView;
}

const Workforce: React.FC<WorkforceProps> = ({ id, view }) => {
  const [showWorkforce, setShowWorkforce] = useState(false);
  const [showWidgetSpas, setShowWidgetSpas] = useState(false);
  const [selectedFloor, setSelectedFloor] = useState("Space");

  const handleFloorSelect = (
    floorName: string,
    coordinates: [number, number]
  ) => {
    setSelectedFloor(floorName);
    setShowWidgetSpas(false);

    if (view && coordinates) {
      view.goTo({
        center: coordinates,
        zoom: 20,
      });
    }
  };

  return (
    <div id={id} className="bg-white p-4 rounded-lg shadow-md">
      <div className="space-y-6">
        <div className="space-y-4">
          <h2 className="text-sm font-semibold text-gray-600">Space:</h2>
          <div className="flex items-center justify-between">
            <div
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => setShowWidgetSpas(!showWidgetSpas)}
            >
              <img src={layers} alt="Layers" className="w-6 h-6" />
              <span className="font-medium">{selectedFloor}</span>{" "}
            </div>
            <img src={viewIcon} alt="Eye" className="w-4 h-4 m-2" />
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
              <img src={viewIcon} alt="Eye" className="w-4 h-4" />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img src={camera} alt="Camera" className="w-6 h-6" />
              <span className="font-medium">Cameras</span>
            </div>
            <div className="flex space-x-4">
              <img src={settings} alt="Settings" className="w-4 h-4 ml-4" />
              <img src={viewIcon} alt="Eye" className="w-4 h-4" />
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
            <img src={viewIcon} alt="Eye" className="w-4 h-4 m-2" />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img src={blueprint} alt="Blueprint" className="w-6 h-6" />
              <span className="font-medium">Blueprint</span>
            </div>
            <img src={viewIcon} alt="Eye" className="w-4 h-4 m-2" />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img src={layers} alt="Layers" className="w-6 h-6" />
              <span className="font-medium">Zones</span>
            </div>
            <img src={viewIcon} alt="Eye" className="w-4 h-4 m-2" />
          </div>
        </div>
      </div>

      {showWorkforce && (
        <div className="absolute top-4 left-[220px] space-x-4">
          <SupWidget id={"id"} />
        </div>
      )}

      {showWidgetSpas && (
        <div className="absolute top-4 left-[220px] space-x-4">
          <WidgetSpas id={"widgetSpas"} onFloorSelect={handleFloorSelect} />
        </div>
      )}
    </div>
  );
};

export default Workforce;
