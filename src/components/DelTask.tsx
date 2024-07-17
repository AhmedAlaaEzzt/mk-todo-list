import { useState } from "react";
import checkImg from "../assets/check.png";
import roundImg from "../assets/round.png";
import "./delTask.css";

interface DelTaskProps {
  task: string;
  onDelete: () => void;
}

const DelTask: React.FC<DelTaskProps> = ({ task, onDelete }) => {
  const [isSelected, setIsSelected] = useState(false);

  const toggleSelection = () => {
    setIsSelected(!isSelected);
  };

  return (
    <li className="task-item">
      <img
        src={isSelected ? checkImg : roundImg}
        alt="Task Status"
        className="task-icon"
        onClick={toggleSelection}
      />
      {task}
      <button className="delete-button" onClick={onDelete}>
        Delete
      </button>
    </li>
  );
};

export default DelTask;
