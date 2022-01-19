import React from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";

/*
const defaultTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Tomar el curso de intro a React", completed: false },
  { text: "Llorar con la llorona", completed: false },
  { text: "Tomar mate", completed: false },
];
*/

const TodoContext = React.createContext();

function TodoProvider(props) {
  const [todos, saveTodos] = useLocalStorage("TODOS_V1", []);

  const [openModal, setOpenModal] = React.useState(false);

  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);

    const newTodos = [...todos];

    newTodos[todoIndex].completed = true;

    saveTodos(newTodos);
  };

  const addTodo = (text) => {
    const newTodos = [...todos];

    newTodos.push({
      text,
      completed: false,
    });

    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);

    const newTodos = [...todos];

    newTodos.splice(todoIndex, 1);

    saveTodos(newTodos);
  };

  React.useEffect(() => {
    console.log("aquí está el código de useEffect");
  }, [totalTodos]);

  return (
    <TodoContext.Provider
      value={{
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        completeTodo,
        addTodo,
        deleteTodo,
        openModal,
        setOpenModal,
      }}
    >
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
