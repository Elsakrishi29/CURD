import Header from "../Header/Header";
import { useSelector, useDispatch } from "react-redux";
import { removedTask, updateTask} from "../Slice/Slice";
import { useState } from "react";
import './Home.scss';

const Home = () => {
  let homestate = useSelector(({ sample }) => sample);
  let dispatch = useDispatch();
  var removeTask = (index) => {
    let task2 = [...homestate.tasks];
    task2.splice(index, 1);

    dispatch(removedTask(task2));
  };
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  var updatedTask = (index) => {
   
    console.log(homestate);
    var task1 = [
      ...homestate[index].tasks,
      { taskName, taskDescription },
    ];
    dispatch(updateTask(task1));
  };
  var displayTask = [];
    displayTask = homestate.tasks;
  return (
    <div className="addtask-container">
      <Header />
      <div className="container">
        <div className="row">
        {displayTask.map((value, index) => {
          return (
            <div key={index} className='container'>
                <div className="show-content">
                    <p>Title :<input type="text" value={value.taskName} onChange={(e)=>setTaskName(e.target.value)}/></p>
                    <p>Description : <textarea rows={5} cols={50} value={value.taskDescription} onChange={(e)=>setTaskDescription(e.target.value)}></textarea></p>
                  <div className="buttons">
                        <div className="button-1">
                            <button onClick={() => removeTask(index)}>Delete</button>
                        </div>
                        <div className="button-1">
                            <button onClick={()=>updatedTask(index)} >Update</button>
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