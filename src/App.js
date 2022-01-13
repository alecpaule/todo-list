import React, { useState } from "react";
import "./App.scss";
import TodoList from "./TodoList";

const App = () => {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="App">
      <TodoList
        input={input}
        setInput={setInput}
        todoList={todoList}
        setTodoList={setTodoList}
      />
    </div>
  );
};

export default App;
