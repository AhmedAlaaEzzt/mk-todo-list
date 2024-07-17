import React, { useState } from "react";
import "./card.css";
import roundIcon from "./assets/round.png";
import checkIcon from "./assets/check.png";

interface Task {
  text: string;
  completed: boolean;
}

const AddCheck: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask("");
    }
  };

  const toggleTaskCompletion = (index: number) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  return (
    <div className="row">
      <input
        type="text"
        id="input-box"
        placeholder="Enter your task"
        value={task}
        onChange={handleChange}
        onKeyPress={(e) => e.key === "Enter" && addTask()}
      />
      <ul id="list-container">
        {tasks.map((task, index) => (
          <li
            key={index}
            onClick={() => toggleTaskCompletion(index)}
            className={task.completed ? "completed" : ""}
          >
            <img
              src={task.completed ? checkIcon : roundIcon}
              alt={task.completed ? "Completed" : "Incomplete"}
              style={{ marginRight: "10px" }}
            />
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddCheck;
