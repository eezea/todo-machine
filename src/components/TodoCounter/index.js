import React from "react";
import "./TodoCounter.css";
import { TodoContext } from "../TodoContext";

function TodoCounter() {
  const { completedTodos, totalTodos } = React.useContext(TodoContext);

  return (
    <>
      <h2 className="todo-counter">
        Has completado {completedTodos} de {totalTodos} TODOs
      </h2>
      <div className="todo-counter__underline"></div>
    </>
  );
}

export { TodoCounter };
