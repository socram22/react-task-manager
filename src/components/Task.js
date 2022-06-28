import React from "react";
import "./Task.css";

const Task = ({ id, text, done, isDone, deleteTask }) => {
  return (
    <>
      <div className={done ? "task-item done" : "task-item"}>
        <div className="task-item-text" onClick={() => isDone(id)}>
          {text}
        </div>
        <div className="task-item-close" onClick={() => deleteTask(id)}>
          x
        </div>
      </div>
    </>
  );
};

export default Task;
