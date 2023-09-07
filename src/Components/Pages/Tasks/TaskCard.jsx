import React from "react";

const TaskCard = ({ singleTask }) => {
  const { title, desc, date, members, priority } = singleTask;
  return (
    <div>
      <div className="card w-96 bg-base-100 text-black">
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>{desc}</p>
          <p>{date}</p>
          <p>{priority}</p>
          <div className="card-actions ">
            <button className="btn btn-ghost">Deny</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
