import React from "react";

const TaskCard = ({ singleTask }) => {
  const { title, desc, date, members, option } = singleTask;
  return (
    <div>
      <div className="card w-96 bg-base-100 text-black shadow-xl">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Task: {title}</h2>
          <p>Description:{desc}</p>
          <p>Date: {date}</p>
          <p>Priority Level: {option}</p>
          <p className="bg-slate-500 w-full text-white py-2 font-semibold">
            Members
          </p>{
            members.map(member=> <p className="">{member}</p>)
          }
          <div>
          <button className="btn btn-success mr-2">Completed</button>
          <button className="btn btn-neutral">In Progress</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
