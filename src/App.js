import './App.css';
import {useState} from 'react';

function App() {
  const [tasksList, setTasksList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  }
  const handleClick = () => {
    newTask !== "" ? setTasksList([...tasksList, newTask]) : console.log("clicked while input is empty");
    setNewTask("");
  }

  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleInputChange}/>
        <button onClick={handleClick}>Add new task</button>
      </div>
      <div className="tasksList">
        { (tasksList.length>0) ? tasksList.map(
          (task, key) => <p>{(key+1) + ".)"} {task}</p>
          ) : "No saved tasks."
        }
      </div>
    </div>
  );
}

export default App;
