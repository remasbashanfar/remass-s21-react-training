function Task(props) {

  const removeTask = () => {
    const newArray = [...props.taskList.splice(0, props.index), 
      ...props.taskList.splice(props.index + 1)];
    props.setTaskList(newArray);
  }

  return <div>
  {props.name}
       <br/>
    <button className='btn' onClick={removeTask}>Done</button>
   
    </div>;
}
export default Task;