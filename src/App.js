import "./App.css";
import Header from "./Components/Header";
import NewTodo from "./Components/NewTodo";
import Todos from "./Components/Todos";
import { useState } from "react";
function App() {
  const onDelete = (todo) => {
    console.log("deleted", todo);
    setTodos(
      todos.filter((c_todo) => {
        return c_todo !== todo;
      })
    );
  };
  const addTodo = (title, desc) => {
    let sno = todos[todos.length - 1].sno + 1;
    const Ntodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, Ntodo]);
  };
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Learn React",
      desc: "This is a react tutorial",
    },
    {
      sno: 2,
      title: "Learn Nodejs",
      desc: "This is node js tutorial",
    },
  ]);
  return (
    <>
      <Header title="Todos List" key={todos.sno} />
      <NewTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
    </>
  );
}

export default App;
