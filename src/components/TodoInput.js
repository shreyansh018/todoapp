import React, { useState } from "react";

function TodoInput(props) {
  //usestate isiliye kr rhe h taki hm search bar m jo bhi likhe use runtime m hi store kara sake.
  const [inputText, setInputText] = useState("");

  //neeche wala code uske liye h, ki ente press kre keyboard m to value add ho jaae.
  const handleEnterPress = (e) => {
    if (e.keyCode === 13) {
      props.addList(inputText);
      setInputText("");
    }
  };
  return (
    <div className="input-container">
      <input
        type="text"
        className="input-box-todo"
        placeholder="Enter your todo"
        value={inputText} //text enter krne k baad seearch bar clear hone k liye
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        onKeyDown={handleEnterPress}
      />
      <button
        className="add-btn"
        onClick={() => {
          props.addList(inputText);
          setInputText(""); //text enter krne k baad seearch bar clear hone k liye
        }}
      >
        +
      </button>
    </div>
  );
}

export default TodoInput;
