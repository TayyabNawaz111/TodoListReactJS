import AddTodo from "./AddTodo";
import React from "react";

export default function Todos(props) {
  return (
    <div>
      {props.todos.map((todo) => {
        return (<AddTodo todo={todo} key={todo.sno} />)
      })}
    </div>
  )
}
