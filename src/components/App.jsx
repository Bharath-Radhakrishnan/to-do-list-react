import React, { useState } from "react";
import Item from "./Item";
function App() {
  const [lists, updateList] = useState(["an item"]);
  const [text, changetext] = useState();
  function handleChange(e) {
    const newText = e.target.value;
    changetext(newText);
  }
  function handleCLick() {
    updateList(prevState => [...prevState, text]);
    const newText="";
    changetext(newText);
  }
  function deleteItem(x) {
    //  console.log(x);
    updateList(prevState => {
      return prevState.filter((item, index) => {
        return index !== x;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" placeholder="Type Here" value={text} />
        <button onClick={handleCLick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {lists.map((item, index) => (
            <Item key={index} id={index} listItem={item} onAdd={deleteItem} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
