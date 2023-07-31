import { useState, useEffect } from "react";
import "./App.css";
import { Task } from "./Task";

function App() {
  const [tasks, setTasks] = useState([
    { text: "1", id: crypto.randomUUID(), completed: false },
    { text: "2", id: crypto.randomUUID(), completed: false },
  ]);

  const [inputValue, setinputValue] = useState("");

  function inputHandler(e) {
    setinputValue(e.target.value);
    console.log(inputValue);
  }

  function addTask() {
    if (inputValue === "") {
      return;
    }
    const newTask = {
      text: inputValue,
      id: crypto.randomUUID(),
      checked: false,
    };
    setTasks((current) => [newTask, ...current]);
    setinputValue("");
  }

  function deleter(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function setCheckedHandler(id, completed) {
    console.log(completed);
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed };
        } else return task;
      })
    );
  }

  return (
    <>
      <ul>
        {tasks.map((task) => {
          return (
            <Task
              key={task.id}
              deleter={deleter}
              setCheckedHandler={setCheckedHandler}
              {...task}
            />
          );
        })}
      </ul>
      <div id="new-todo-form">
        <label htmlFor="todo-input">New Todo</label>
        <input
          type="text"
          id="todo-input"
          value={inputValue}
          onChange={(e) => inputHandler(e)}
        />
        <button onClick={addTask}>Add Todo!</button>
      </div>
    </>
  );
}

export default App;
