import React from "react";
import "./TodoCounter.css";
import { TodoContext } from "../TodoContext";

function TodoCounter() {
  const { completedTodos, totalTodos } = React.useContext(TodoContext);

  return (
    <>
      {completedTodos === totalTodos && totalTodos !== 0 ? (
        <h2 className="todo-counter">Has completado todos los TODOs</h2>
      ) : totalTodos === 0 ? (
        <h2 className="todo-counter">No tienes TODOs por completar</h2>
      ) : (
        <h2 className="todo-counter">
          Has completado {completedTodos} de {totalTodos} TODOs
        </h2>
      )}

      <div className="todo-counter__underline"></div>
    </>
  );
}

export { TodoCounter };
