import React from "react";

function Task({task,description,deleteTask,index}) {
  return (
    <div className="task">
      <div>
      <p>{task}</p>
      <span>{description}</span>
      </div>
      <button onClick={()=>{
deleteTask(index)
      }}> -</button>
    </div>
  );
}

export default Task;
