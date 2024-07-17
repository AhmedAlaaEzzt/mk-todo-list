import { useState } from "react";
import todo from "../assets/to-do-list.png";
import AddTask from "./AddTask";
import CheckTask from "./CheckTask";
import "./card.css";

function CardTask() {
  const [tasks, setTasks] = useState<string[]>([]);

  const handleAddTask = (task: string) => {
    setTasks([...tasks, task]);
  };

  return (
    <div style={{ textAlign: "center", padding: "15%" }}>
      <div className="container">
        <div className="dolist">
          <h2>
            ToDo <img src={todo} alt="To-Do List" className="img-todo" />
          </h2>
          <div className="row">
            <AddTask onAddTask={handleAddTask} />
          </div>
          <ul className="task-list">
            {tasks.map((task, index) => (
              <CheckTask key={index} task={task} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardTask;
