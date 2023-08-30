export default function Task(props) {
  return (
    <div>
      <p>{props.taskId + ".)"} {props.taskName}</p>
      <button onClick={()=> props.deleteTask(props.taskId)}>X</button>
    </div>
  );
}
