import Header from "../Header/Header";
import { useSelector, useDispatch } from "react-redux";
import { removedTask, addTask, updateTask } from "../Slice/Slice";
import { useState } from "react";
import "./Home.scss";

const Home = () => {
  const homestate = useSelector((state) => state.sample);
  // let homestate = useSelector(({ sample }) => sample);
  let dispatch = useDispatch();
  var removeTask = (index) => {
    let task2 = [...homestate.tasks];
    task2.splice(index, 1);

    dispatch(removedTask(task2));
  };
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [updateTitle, setUpdateTitle] = useState("");
  const [updateDescription, setUpdateDescription] = useState("");
  var editTask = (index) => {
    var updateTitle = document.getElementById("update-title");
    var updateDescription = document.getElementById("update-descrip");

    updateTitle.value = homestate.tasks[index].taskName;
    updateDescription.value = homestate.tasks[index].taskDescription;
    // setupdateTitle( updateTitle.value);
    const task = homestate.tasks[index];
    setUpdateTitle(task.taskName);

    setUpdateDescription(updateDescription.value);
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
              <div key={index} className="container">
                <div className="show-content">
                  <p>
                    Title :
                    <input
                      type="text"
                      value={value.taskName}
                      onChange={(e) => {
                        setTaskName(e.target.value);
                        dispatch(
                          updateTask({
                            event: taskName,
                            index,
                            key: "taskName",
                          })
                        );
                      }}
                    />
                  </p>
                  <p>
                    Description :{" "}
                    <textarea
                      rows={5}
                      cols={50}
                      value={value.taskDescription}
                      onChange={(e) => {
                        setTaskDescription(e.target.value);
                        
                      }}
                    ></textarea>
                  </p>
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
                      <button onClick={() => {dispatch(updateTask({event:updateTitle,
                      index,
                      key:"updateTitle"}))}}>Update</button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <input id="update-title"></input>
          <input id="update-descrip"></input>
        </div>
      </div>
    </div>
  );
};

export default Home;
