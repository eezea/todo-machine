import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState("");

  const { addTodo, setOpenModal } = React.useContext(TodoContext);

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onCancel = () => {
    setOpenModal(false);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (newTodoValue !== "") {
      addTodo(newTodoValue);
      setNewTodoValue("");
      setOpenModal(false);
    }
  };

  return (
    <form className="todo-form" onSubmit={onSubmit}>
      <label>Nuevo TODO</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Escriba aquí su tarea"
      />
      <div className="buttons-container">
        <button type="button" onClick={onCancel} className="button-cancel">
          Cancelar
        </button>
        <button type="submit" className="button-add">
          Agregar
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
