import React, { useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import Todolist from "./components/TodoList";

function App() {
  //useState isiliye use kiya taki jo bhi list m add kre wo show hota jaae.

  const [listTodo, setListTodo] = useState([]);

  //App.js parent h or TodoInput.js child h to child se parent m data send krna h. uske liye props use krenge.
  //uske liye addList function banaenge
  let addList = (inputText) => {
    if (inputText !== "") setListTodo([...listTodo, inputText]); //blank list add hone se avoid kr raha h
  };
  const deleteListItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1);
    setListTodo([...newListTodo]);
  };
  return (
    <div className="main-container">
      <div className="center-container">
        <TodoInput addList={addList} />
        <h1 className="app-heading">TODO</h1>
        <hr />
        {listTodo.map((listItem, i) => {
          return (
            <Todolist
              key={i}
              index={i}
              item={listItem}
              deleteItem={deleteListItem}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
