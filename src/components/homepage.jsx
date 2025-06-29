import React, { useEffect, useState } from "react";
import Task from "./Task";

const Homepage = () => {
  

  const initial = JSON.parse(localStorage.getItem("tasks")) || [];
  const [tasks, settasks] = useState(initial);
  const [task, settaskvalue] = useState("");
  const [description, setDescription] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    settasks([
      ...tasks,
      {
        task,
        description,
      },
      
    ]);
   
   
  };
  useEffect(() => {
    localStorage.setItem("tasks",JSON.stringify(tasks));
  }, [tasks])
  
  const deleteTask = (index) => {
    const filteredArray = tasks.filter((val, i) => {
      return i !== index;
    });

    settasks(filteredArray);
  };

  console.log(task, description);
  return (
    <div className="home">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter the Title"
          value={task}
          onChange={(e) => {
            settaskvalue(e.target.value);
          }}
        />
        <textarea
          placeholder="Enter the Description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></textarea>
        <button type="submit"> Submit</button>
      </form>

      {tasks.map((item, index) => (
        <Task
          key={index}
          task={item.task}
          description={item.description}
          index={index}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
};

export default Homepage;
