import React from "react";
import Header from "../Header/Header";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask } from "../Slice/Slice";
import './Issue.scss';

const Issue = () => {

  let states = useSelector(({ sample }) => sample);
  console.log('states',states);
  
  let dispatch = useDispatch();
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const handlingSubmit = (e) => {

    e.preventDefault();
    
    var task1 = [...states.tasks,{ taskName, taskDescription }];
    dispatch(addTask(task1));
    
    setTaskName('');
    setTaskDescription('');
  };

 
  
  return (
    <section className="form-container">
      <Header />
      <div className="form-content">
      <form onSubmit={(e) => handlingSubmit(e)} className='form'>
        <h1>Requirements  </h1>
        <hr></hr>
        <div className="label-1">
          <p>Title :</p>
          <input className="txt" type={"text"} value={taskName}  onChange={(e) => setTaskName(e.target.value)} id="input"/>
        </div>
        <div className="label-2">
          <p>Description :</p>
          <textarea rows={5} cols={25} className="txt" type={"text"} value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)} />
        </div>
        <div className="button">
          <button type="submit">Save</button>
        </div>
      </form>
      </div>
    </section>
  );
};

export default Issue;