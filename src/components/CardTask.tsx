import { useState } from "react";
import todo from "../assets/to-do-list.png";
import AddTask from "./AddTask";
import DelTask from "./DelTask";
import "./card.css";

function CardTask() {
  const [tasks, setTasks] = useState<string[]>([]);

  const handleAddTask = (task: string) => {
    setTasks([...tasks, task]);
  };

  const handleDeleteTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="Div2">
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
              <DelTask
                key={index}
                task={task}
                onDelete={() => handleDeleteTask(index)}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardTask;
