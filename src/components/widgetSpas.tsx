import React, { useState } from "react";

interface Floor {
  name: string;
  workforce: number;
  coordinates: [number, number];
}

interface WidgetSpasProps {
  id: string;
  onFloorSelect: (floorName: string, coordinates: [number, number]) => void;
}

const WidgetSpas: React.FC<WidgetSpasProps> = ({ id, onFloorSelect }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const floors: Floor[] = [
    {
      name: "Floor 01",
      workforce: 153,
      coordinates: [36.475769983396106, 28.404464905603234],
    },
    {
      name: "Floor 02",
      workforce: 152,
      coordinates: [36.63001641772351, 28.368803048817227],
    },

    { name: "Floor 03", workforce: 152, coordinates: [0, 0] },
  ];

  const filteredFloors = floors.filter((floor) =>
    floor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleFloorSelect = (
    floorName: string,
    coordinates: [number, number]
  ) => {
    onFloorSelect(floorName, coordinates);
  };

  return (
    <div
      id={id}
      className="bg-white w-80 p-4 rounded-lg shadow-lg absolute top-0 left-0"
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Spaces</h2>
        <button className="text-gray-500 hover:text-gray-700">&times;</button>
      </div>
      <div className="mb-4">
        <input
          type="text"
          className="w-full p-2 border rounded-lg"
          placeholder="Search."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="space-y-2 overflow-y-auto max-h-96">
        {filteredFloors.map((floor, index) => (
          <div
            key={index}
            className="p-2 bg-gray-50 rounded-lg flex justify-between items-center hover:bg-gray-200 cursor-pointer"
            onClick={() => handleFloorSelect(floor.name, floor.coordinates)}
          >
            <div>
              <h3 className="text-sm font-medium hover:text-blue-600">
                {floor.name}
              </h3>
              <p className="text-xs text-gray-500">
                Workforce: {floor.workforce}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WidgetSpas;
