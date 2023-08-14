import "./App.css";
import Header from "./Components/Header";
import Todos from "./Components/Todos";
function App() {
  let todos = [
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
  ];
  return (
    <>
      <Header title="Todos List" key = {todos.sno}  />
      <Todos todos={todos} />
    </>
  );
}

export default App;
