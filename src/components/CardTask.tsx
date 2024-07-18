import { useState } from "react";
import todo from "../assets/to-do-list.png";
import AddTask from "./AddTask";
import DelTask from "./DelTask";
import Search from "./Search";
import "./card.css";

function CardTask() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<string[]>(tasks);

  const handleAddTask = (task: string) => {
    setTasks([...tasks, task]);
    setFilteredTasks([...tasks, task]);
  };

  const handleDeleteTask = (index: number) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
    setFilteredTasks(newTasks);
  };

  const handleSearch = (query: string) => {
    const filtered = tasks.filter((task) =>
      task.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredTasks(filtered);
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
            <Search onSearch={handleSearch} />
          </div>
          <ul className="task-list">
            {filteredTasks.map((task, index) => (
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
