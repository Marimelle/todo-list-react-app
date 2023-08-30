export default function Task(props) {
  return (
    <div className={props.completed ? "taskCompleted" : ""}>
      <p>{props.taskId + ".) "} {props.taskName}</p>
      <div className="btns">
        <button className="completeBtn" onClick={()=> props.taskCompleted(props.taskId)}>{props.completed? "✔\nDONE" :"MARK\nDONE"}</button>
        <button className="deleteBtn" onClick={()=> props.deleteTask(props.taskId)}>〤</button>
      </div>
    </div>
  );
}
