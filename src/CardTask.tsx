import round from "./assets/round.png";
import check from "./assets/check.png";
import todo from "./assets/to-do-list.png";
import React, { useState } from "react";
import "./App.css";
function CardTask() {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "15%" }}>
      <div className="container">
        <div className="dolist">
          <h2>
            ToDo <img src={todo} alt="To-Do List" className="img-todo" />
          </h2>
          <div className="row">
            <input
              type="text"
              id="input-box"
              placeholder="Enter your task"
              value={task}
              onChange={handleChange}
              onKeyPress={(e) => e.key === "Enter" && addTask()}
            />
          </div>
          <ul id="list-container">
            {tasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardTask;
