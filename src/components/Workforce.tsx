import { useState } from "react";
import layers from "../assets/imgs/layers.png";
import viewIcon from "../assets/imgs/view.png";
import worker from "../assets/imgs/worker.png";
import settings from "../assets/imgs/settings.png";
import camera from "../assets/imgs/security-camera.png";
import earth from "../assets/imgs/earth.png";
import blueprint from "../assets/imgs/blueprint.png";
import SupWidget from "./SupWidget";
import MapView from "@arcgis/core/views/MapView";
import Basemap from "@arcgis/core/Basemap";

interface WorkforceProps {
  id: string;
  view: MapView;
}

const Workforce: React.FC<WorkforceProps> = ({ id, view }) => {
  const [showWorkforce, setShowWorkforce] = useState(false);
  const [showSpas, setShowSpas] = useState(false);
  const [selectedFloor, setSelectedFloor] = useState("Floor");
  const floors = [
    {
      floorName: "Floor 01",
      peopleCount: 152,
      coordinates: [36.47618573252876, 28.4044846389379] as [number, number],
    },
    {
      floorName: "Floor 02",
      peopleCount: 152,
      coordinates: [36.46642297389121, 28.393974865930545] as [number, number],
    },
    {
      floorName: "Floor 03",
      peopleCount: 152,
      coordinates: [36.511357657364385, 28.45653226775279] as [number, number],
    },
    {
      floorName: "Floor 04",
      peopleCount: 152,
      coordinates: [36.6211868238593, 28.39926529590187] as [number, number],
    },
  ];

  const handleSelectFloor = (
    floorName: string,
    coordinates: [number, number]
  ) => {
    setSelectedFloor(floorName);
    //Close floor after selection
    setShowSpas(false);
    view.goTo({
      center: coordinates,
      zoom: 18,
    });
  };

  const handleBasemapChange = () => {
    //Switch between Basemap
    const newBasemap =
      view.map.basemap.id === "hybrid"
        ? Basemap.fromId("streets")
        : Basemap.fromId("hybrid");
    view.map.basemap = newBasemap;
  };

  return (
    <div id={id} className="bg-white p-4 rounded-lg shadow-md">
      <div className="space-y-6">
        <div className="space-y-4">
          <h2 className="text-sm font-semibold text-gray-600">Space:</h2>
          <div className="flex items-center justify-between">
            <div
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => setShowSpas(!showSpas)}
            >
              <img src={layers} alt="Layers" className="w-6 h-6" />
              {/* If a floor is chosen, the name changes*/}
              <span className="font-medium">{selectedFloor}</span>
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
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={handleBasemapChange}
          >
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

      {showSpas && (
        <div className="absolute top-4 left-[220px] space-x-4">
          <div className="bg-white shadow-lg rounded-lg p-4 w-64">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Spaces</h2>
              <button
                // Please leave the default mode hidden
                onClick={() => setShowSpas(false)}
                className="text-gray-600"
              >
                X
              </button>
            </div>
            <ul>
              {floors.map((floor, index) => (
                <li
                  key={index}
                  className={`p-4 mt-2 rounded-lg cursor-pointer ${
                    selectedFloor === floor.floorName
                      ? "bg-indigo-100"
                      : "bg-gray-100"
                  }`}
                  onClick={() =>
                    handleSelectFloor(floor.floorName, floor.coordinates)
                  }
                >
                  <p
                    className={`font-semibold ${
                      selectedFloor === floor.floorName
                        ? "text-indigo-700"
                        : "text-gray-700"
                    }`}
                  >
                    {floor.floorName}
                  </p>
                  <p className="text-gray-500">* People: {floor.peopleCount}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Workforce;
