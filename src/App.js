import './App.css';
import {useState} from 'react';
import Task from './Task.js';

function App() {
  const [list, setList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  }
  const handleClick = () => {
    if (newTask !== "") {
      const task = {
        taskId: list.length===0 ? 1 : list[list.length-1].taskId + 1,
        taskName: newTask
      }
      setList([...list, task]);
    }
    else alert("Input is empty");
  }

  const deleteTask = (taskId) => {
    setList(list.filter((current)=>
      current.taskId !== taskId
    ));
  }

  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleInputChange}/>
        <button onClick={handleClick}>Add task</button>
      </div>
      <div className="tasksList">
        { (list.length>0) ? list.map(
          (task) => {
            return <Task taskName={task.taskName} taskId={task.taskId} deleteTask={deleteTask} />
        }
          ) : "No saved tasks."
        }
      </div>
    </div>
  );
}

export default App;
