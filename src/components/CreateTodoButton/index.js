import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton(props) {
  const onClickButton = () => {
    props.setOpenModal(true);
  };

  return (
    <button className="create-todo-button" onClick={onClickButton}>
      +
    </button>
  );
}

export { CreateTodoButton };
