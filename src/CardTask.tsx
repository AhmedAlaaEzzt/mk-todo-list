import React, { useState } from "react";
import "./App.css";

import roundIcon from "./assets/round.png";
import checkIcon from "./assets/check.png";
import ToDo from "./assets/to-do-list.png";

interface Task {
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
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
    <div style={{ textAlign: "center", padding: "15%" }}>
      <div className="container">
        <div className="dolist">
          <h2>
            ToDo <img src={ToDo} alt="To-Do List" />
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
              <li
                key={index}
                onClick={() => toggleTaskCompletion(index)}
                style={{
                  cursor: "pointer",
                  textDecoration: task.completed ? "line-through" : "none",
                }}
              >
                <img
                  className="icom-check"
                  src={task.completed ? checkIcon : roundIcon}
                  alt={task.completed ? "Completed" : "Incomplete"}
                  style={{ marginRight: "10px" }}
                />
                {task.text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
