import React from "react";
import todo from "../assets/to-do-list.png";
import "./card.css";
import AddCheck from "./AddCheck";

const CardTask: React.FC = () => {
  return (
    <div style={{ textAlign: "center", padding: "15%" }}>
      <div className="container">
        <div className="dolist">
          <h2>
            ToDo <img src={todo} alt="To-Do List" className="img-todo" />
          </h2>
          <AddCheck />
        </div>
      </div>
    </div>
  );
};

export default CardTask;
