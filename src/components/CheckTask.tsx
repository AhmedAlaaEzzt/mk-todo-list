import { useState } from "react";
import checkImg from "../assets/check.png";
import roundImg from "../assets/round.png";
import "./checkTask.css";

interface CheckTaskProps {
  task: string;
}

const CheckTask: React.FC<CheckTaskProps> = ({ task }) => {
  const [isSelected, setIsSelected] = useState(false);

  const toggleSelection = () => {
    setIsSelected(!isSelected);
  };

  return (
    <li className="task-item" onClick={toggleSelection}>
      <img
        src={isSelected ? checkImg : roundImg}
        alt="Task Status"
        className="task-icon"
      />
      {task}
    </li>
  );
};

export default CheckTask;
