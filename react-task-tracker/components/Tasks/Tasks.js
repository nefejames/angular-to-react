import AddTask from "../AddTask/AddTask";
import TaskItem from "../TaskItem/TaskItem";
import { useShowFormContext } from "../../context/showFormContext";
import { useState, useEffect } from "react";

export default function Tasks() {
  const [tasks, setTasks] = useState(null);
  const { showAddTaskForm } = useShowFormContext();

  useEffect(() => {
    fetch("http://localhost:5000/tasks")
      .then((res) => res.json())
      .then((data) => setTasks(data));
  }, []);

  return (
    <>
      {showAddTaskForm && <AddTask />}
      {tasks
        ? tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              tasks={tasks}
              setTasks={setTasks}
            />
          ))
        : null}
    </>
  );
}
