import { useState } from "react";
import { useValue } from "./hooks";
import "./App.css";
import { Task } from "./Task";

function App() {
  const [tasks, setTasks] = useState([
    { text: "Task example", id: crypto.randomUUID(), completed: false },
    { text: "Another task example", id: crypto.randomUUID(), completed: false },
  ]);
  const inputValue = useValue("");

  function addTask() {
    if (inputValue.inpvalue === "") {
      return;
    }
    const newTask = {
      text: inputValue.inpvalue,
      id: crypto.randomUUID(),
      completed: false,
    };
    setTasks((current) => [newTask, ...current]);
    inputValue.resetValue("");
  }

  function deleter(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function setCheckedHandler(id, completed) {
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
      <ul className="task-list">
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
          value={inputValue.inpvalue}
          onChange={inputValue.onChange}
        />
        <button onClick={addTask}>Add Todo!</button>
      </div>
    </>
  );
}

export default App;
