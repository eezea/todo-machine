import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
  const onDelete = () => {
    console.log("Se ha eliminado un todo: " + props.text);
  };

  return (
    <div
      className={`todo-item-container ${props.completed ? "item-checked" : ""}`}
    >
      <span onClick={props.onComplete}>✔</span>
      <li className="todo-item-text">{props.text}</li>
      <span onClick={props.onDelete}>✖</span>
    </div>
  );
}

export { TodoItem };
