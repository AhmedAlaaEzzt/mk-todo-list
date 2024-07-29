import React, { useState } from "react";
import WorkforceItem from "./components/ItemStatus";

const App: React.FC = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsClicked(!isClicked)}
    >
      <WorkforceItem isHovered={isHovered} isActive={isClicked} />
    </div>
  );
};

export default App;
