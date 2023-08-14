import AddTodo from "./AddTodo";
import React from "react";

export default function Todos(props) {
  return (
    <div>
      {props.todos.length === 0
        ? "No todos"
        : props.todos.map((todo) => {
            return (
              <AddTodo todo={todo} key={todo.sno} onDelete={props.onDelete} />
            );
          })}
    </div>
  );
}
