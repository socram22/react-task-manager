import React, { useState } from "react";
import Task from "./Task";
import "./TaskContainer.css";
import TaskForm from "./TaskForm";

const TaskContainer = () => {
  const [allTasks, setAllTasks] = useState([]);

  const addTask = (task) => {
    if (task.text.trim()) {
      task.text = task.text.trim();
      const addNewTask = [task, ...allTasks];
      setAllTasks(addNewTask);
    }
  };

  const handleIsDone = (id) => {
    const newArrTask = allTasks.map((task) => {
      if (task.id === id) {
        task.done = !task.done;
      }
      return task;
    });
    setAllTasks(newArrTask);
  };

  const deleteTask = (id) => {
    const newArrTask = allTasks.filter((task) => task.id !== id);
    setAllTasks(newArrTask);
  };
  return (
    <div className="task-container">
      <TaskForm onSubmit={addTask} />
      <div>
        {allTasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            text={task.text}
            done={task.done}
            isDone={handleIsDone}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskContainer;
