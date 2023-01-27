import React, { useState } from "react";
import NewTask from "../Presentational/NewTask";
import TasksList from "../Presentational/TasksList";

export default function AppFunction() {
  const [newTask, setNewTask] = useState({});
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setNewTask((prevNewTask) => ({ ...prevNewTask, id: Date.now(), [name]: value }));
  };

  const [allTasks, setTasks] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!newTask.title) return;
    setTasks((prevTasks) => [newTask, ...prevTasks]);
    setNewTask({});        
  };
  const handleDelete = (taskIdToRemove) => {
    setTasks((prevTasks) => prevTasks.filter(
      (task) => task.id !== taskIdToRemove
      ));
  };

    return (
      <main>
        <h1>Tasks</h1>
        <NewTask
          newTask={newTask}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
        <TasksList allTasks={allTasks} handleDelete={handleDelete} />
      </main>
    );
  }
