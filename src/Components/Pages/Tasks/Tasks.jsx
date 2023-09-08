import React, { useContext, useEffect, useState } from "react";
import TaskCard from "./TaskCard";
import { AuthContext } from "../../../Providers/AuthProviders";

const Tasks = () => {
  const {user}=useContext(AuthContext);
    const [taskList, setTaskList] = useState([])
    useEffect(() => {
        let arr = localStorage.getItem("tasks")
       
        if(arr){
            let obj = JSON.parse(arr)
            setTaskList(obj)
        }
    }, [])
    console.log(taskList);
    
  return (
    <>
    <h1 className="text-white text-2xl font-semibold text-center mb-4">See task you have started</h1>
    <div className="grid grid-cols-3 gap-3">
    {
        taskList.map(singleTask=><TaskCard singleTask={singleTask}></TaskCard>)
    }
    </div>
    </>
  );
};

export default Tasks;
