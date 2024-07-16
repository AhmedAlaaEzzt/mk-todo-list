import todo from "../assets/to-do-list.png";

import "./card.css";
function CardTask() {
  return (
    <div style={{ textAlign: "center", padding: "15%" }}>
      <div className="container">
        <div className="dolist">
          <h2>
            ToDo <img src={todo} alt="To-Do List" className="img-todo" />
          </h2>
          <div className="row">
            <input type="text" id="input-box" placeholder="Enter your task" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardTask;
