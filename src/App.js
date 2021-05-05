import './App.css';
import { useEffect, useState } from 'react';
import Task from './Task';


function App() {
  const [inputTask, setInputTask] = useState(""); 
  const [taskList, setTaskList] = useState([]); 
  const addTask = () => {
    setTaskList([...taskList, inputTask]);
    setInputTask("");
  }

  useEffect(() => {
    console.log("rendering!");
    return () => {console.log("final cleanup")};
  });
  return (
    <div className="todo-list">
      <header className="header">Remas's To Do List</header>
      <br/>
              <input type="text" onChange={(event) => { setInputTask(event.target.value) }} value={inputTask} />
        <button className='btn' onClick={addTask} > Add Task</button>
        {

          taskList.map((value, index) => {
            return <Task
              className= "todo-item"
              key={value}
              name={value}
              index={index}
              taskList={taskList}
              setTaskList={setTaskList}>
            </Task>
          })
        }
    </div>
  );
}

export default App;