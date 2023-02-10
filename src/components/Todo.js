import { useState } from "react";
import TodoList from "./TodoList";

export default function Todo() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [id, setId] = useState(1);

  const handleFunction = (e) => {
    setText(e.target.value);
  };

  const changeStatus = (id) => {
    var value = todos.map((item) => {
      if (item.id === id) {
        item.status = !item.status;
      }
      return item;
    });
    setTodos(value);
  };

  const addValues = () => {
    let todo = { text: text, status: false, id: id };
    setId(id + 1);
    setTodos([...todos, todo]);
    setText("");
  };

  return (
    <>
      <div className="listContainer">
        <h2 className="title">Todo App</h2>
        <div className="form">
          <input type="text" onChange={handleFunction} value={text}></input>
          <button onClick={addValues}>ADD</button>
        </div>

        <TodoList listitem={todos} changeStatus={changeStatus} />
      </div>
    </>
  );
}
