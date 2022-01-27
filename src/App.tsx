import React, { useState } from 'react';
import './assets/styles/global.css';

function App() {
  //const AddTaskForm = ({ addTask }) => {const [value, setValue] = useState("");

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   value && addTask(value)
  //   setValue("");
  // };

  //   return (
  //     <form onSubmit={handleSubmit}>
  //       <input
  //         type="text"
  //         value={value}
  //         placeholder="Enter a title for this task…"
  //         onChange={e => setValue(e.target.value)}
  //       />
  //       <button type="submit"><i class="fas fa-plus"></i></button>
  //     </form>
  //   );
  // }

  // const ToDoList = () => {

  //   const [tasks, setTasks] = useState([{
  //     text: "Like",
  //     isCompleted: false
  //   }, {
  //     text: "Comment",
  //     isCompleted: false
  //   }, {
  //     text: "Subscribe",
  //     isCompleted: false
  //   }]);

  //   const addTask = text => setTasks([...tasks, { text }]);



  //   const removeTask = index => {
  //     const newTasks = [...tasks];
  //     newTasks.splice(index, 1);
  //     setTasks(newTasks);
  //   };

  return (
    <div className="entries-list">
      <div className="entry">
        <span className={"entry-text"}>
          Entrie 1
        </span>
        <button>Delete</button>
      </div>
      <div className="entry">
        <span className={"entry-text"}>
          Entrie 2
        </span>
        <button>Delete</button>
      </div>
      <div className="entry">
        <span className={"entry-text"}>
          Entrie 3
        </span>
        <button>Delete</button>
      </div>
    </div>

    /*<div className="todo-list">
      {tasks.map((task, index) => (
        <div className="todo">
          <span onClick={() => toggleTask(index)} className={task.isCompleted ? "todo-text todo-completed" : "todo-text"}>
            {task.text}
          </span>
          <button onClick={() => removeTask(index)}><i class="fas fa-trash-alt"></i></button>
        </div>
      ))}
      <AddTaskForm addTask={addTask} />
    </div>*/
  );
}

export default App;
