import { useState } from "react";
import "./addTask.css";

interface AddTaskProps {
  onAddTask: (task: string) => void;
}

const AddTask: React.FC<AddTaskProps> = ({ onAddTask }) => {
  const [task, setTask] = useState("");

  const handleAddTask = () => {
    if (task.trim()) {
      onAddTask(task);
      setTask("");
    }
  };

  return (
    <div className="add-task">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add task "
      />
      <button onClick={handleAddTask}> Add your task </button>
    </div>
  );
};

export default AddTask;
