import Header from "../Header/Header";
import { useSelector, useDispatch } from "react-redux";
import { removedTask, addTask, updateTask } from "../Slice/Slice";
import { useState } from "react";
import "./Home.scss";

const Home = () => {
  let states = useSelector(({ sample }) => sample); 
  let dispatch = useDispatch();

  var removeTask = (index) => {
    let task2 = [...states.tasks];
    task2.splice(index, 1);
    dispatch(removedTask(task2));
  };

  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  

  var editTask = (index) => {
    setTaskName(states.tasks[index].taskName)
    setTaskDescription(states.tasks[index].taskDescription)
  };

  const update = (index) =>{
    dispatch(updateTask({index,taskName,taskDescription}))

    setTaskName('')
    setTaskDescription('')
  }
  
  

  return (
    <div className="addtask-container">
      <Header />
      <div className="display">
        <h1>Display Edited Values</h1>
        <hr></hr>
      </div>
      <div className="update">
        <div className="update-1">
          <h4>Edit Title Value :</h4>
          <input type="text" value={taskName} onChange={(event)=>setTaskName(event.target.value)}></input>
        </div>
        <div className="update-1">
            <h4>Edit Description Value :</h4>
            <input type="text" value={taskDescription} onChange={(event)=>setTaskDescription(event.target.value)}></input>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {states.tasks.map((value, index) => {
            return (
              <div key={index} className="container">
                <div className="show-content">
                  <p>
                    Title :
                    <input type="text" value={value.taskName} onChange={(e) => {setTaskName(e.target.value);dispatch(updateTask({event: taskName,index,key: "taskName" }));}}/>                                                                                                                                                                   
                  </p>
                  <p>
                    Script :
                    <textarea rows={5} cols={50} value={value.taskDescription} onChange={(e) => {setTaskDescription(e.target.value)}}></textarea>
                  </p>
                  <div className="btn">
                      <div className="buttons">
                        <div className="button-1">
                          <button onClick={() => removeTask(index)}>Delete</button>
                        </div>
                      </div>
                      <div className="buttons">
                        <div className="button-1">
                          <button onClick={() => editTask(index)}>Edit</button>
                        </div>
                      </div>
                      <div className="buttons">
                        <div className="button-1">
                          <button onClick={() => update(index)}>Update</button>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
            );
          })}
          
        </div>
      </div>
    </div>
  );
};

export default Home;