import React, { useState } from "react";

const AddTask = () => {
    // const [inputData,setInputData]=useState([]);
    const [items,setItems] = useState([]);
    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const desc = form.desc.value;
        const date = form.date.value;
        const option= form.priority.value;
        const members = Array.from(form.member).filter((checkbox) =>checkbox.checked).map((checkbox) => checkbox.value);
        const taskData = {title,desc,date, option,members};
        
        // setInputData(inputData);
        setItems((prevItems) => [...prevItems,taskData] );
        const updatedItems = [...items, taskData];
        localStorage.setItem('tasks', JSON.stringify(updatedItems));
    }
    const addItem = ()=>{

    }
    // console.log(items);
  return (
    <div className="card w-96 bg-gray-300 shadow-xl p-4">
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Task Title</span>
          </label>
          <input
            type="text"
            placeholder="title"
            name="title"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Description</span>
          </label>
          <input
            type="text"
            placeholder="desc"
            name="desc"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Submission Date</span>
          </label>
          <input type="date" name="date" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Pick priority</span>
          </label>
          <select name="priority" className="select select-bordered font-semibold">
            <option disabled selected>
              Pick one
            </option>
            <option>High</option>
            <option>Low</option>
          </select>
        </div>
        <div className="form-control">
    <label className="label">
        <span className="label-text font-semibold">Select Members</span>
    </label>
    <div className="space-x-2">
        <label className="checkbox">
            <input type="checkbox" name="member" value="Tamim" />
            <span className="checkbox-mark"></span> Tamim
        </label>
        <label className="checkbox">
            <input type="checkbox" name="member" value="Rafi" />
            <span className="checkbox-mark"></span> Rafi
        </label>
        <label className="checkbox">
            <input type="checkbox" name="member" value="Sahid" />
            <span className="checkbox-mark"></span> Sahid
        </label>
        <label className="checkbox">
            <input type="checkbox" name="member" value="Monir" />
            <span className="checkbox-mark"></span> Monir
        </label>
    </div>
</div>

        <div className="form-control mt-6">
          <input className="btn btn-primary"  type="submit" value="Submit Task" />
        </div>
      </form>
    </div>
  );
};

export default AddTask;
