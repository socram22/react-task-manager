import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./TaskForm.css";

const TaskForm = (props) => {
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: uuidv4(),
      text: input,
      done: false,
    };
    props.onSubmit(newTask);
  };
  return (
    <form style={{ display: "flex" }} onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        className="task-input"
        type="text"
        placeholder="Write a task..."
      />
      <button className="task-btn">Create Task</button>
    </form>
  );
};

export default TaskForm;
