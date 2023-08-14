import React, { useState } from "react";

export default function NewTodo(props) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (parameter) => {
    parameter.preventDefault();
    if (!title || !desc) {
      alert("Error! Title/Desc is blank");
    } else {
      props.addTodo(title, desc);
      setTitle("");
      setDesc("");
    }
  };

  return (
    <div>
      <h3>Add a new todo</h3>
      <form onSubmit={submit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="Add Title Here"
            value={title}
            onChange={(change) => {
              setTitle(change.target.value);
            }}
          />
        </div>
        <div>
          <label>Description</label>
          <input
            type="text"
            className="form-control"
            placeholder="Add Description here"
            value={desc}
            onChange={(change) => {
              setDesc(change.target.value);
            }}
          />
        </div>
        <button className="btn btn-success">Submit</button>
      </form>
    </div>
  );
}
