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
        completed: false,
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
  const taskCompleted = (taskId) => {
    setList(list.map((current) => {
      if(current.taskId === taskId){
        current.completed = !current.completed;
      }
      return current;
    }));
  }

  return (
    <div className="App">
      <h1>To-do List</h1>
      <div className="addTask">
        <input onChange={handleInputChange}/>
        <button onClick={handleClick}>Add task</button>
      </div>
      <div className="tasksList">
        { (list.length>0) ? list.map(
          (task) => {
            return <Task taskName={task.taskName} taskId={task.taskId} completed={task.completed} deleteTask={deleteTask} taskCompleted={taskCompleted}/>
        }
          ) : "No saved tasks."
        }
      </div>
    </div>
  );
}

export default App;
