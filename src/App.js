import "./App.css";
import Header from "./Components/Header";
import NewTodo from "./Components/NewTodo";
import Todos from "./Components/Todos";
import { useState, useEffect } from "react";
function App() {
  let initalValue;
  if (localStorage.getItem("todos") === null) {
    initalValue = [];
  } else {
    initalValue = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    setTodos(
      todos.filter((c_todo) => {
        return c_todo !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const addTodo = (title, desc) => {
    let sno;
    if (todos.length === 0) {
      sno = 1;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const Ntodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, Ntodo]);
  };
  const [todos, setTodos] = useState(initalValue);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  return (
    <>
      <Header title="Todos List" key={todos.sno} />
      <NewTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
    </>
  );
}

export default App;
