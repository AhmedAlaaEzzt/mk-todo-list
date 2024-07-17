import React from "react";
import todo from "./assets/to-do-list.png";
import "./card.css";
import Addtask from "./Addtask";

const CardTask: React.FC = () => {
  return (
    <div className="div1">
      <div className="container">
        <div className="dolist">
          <h2>
            ToDo <img src={todo} alt="To-Do List" className="img-todo" />
          </h2>
          <Addtask />
        </div>
      </div>
    </div>
  );
};

export default CardTask;
