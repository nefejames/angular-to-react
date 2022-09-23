import styled from "styled-components";

export default function TaskItem({ task, tasks, setTasks }) {
  const deleteTask = () => {
    let newTasks;
    fetch(`http://localhost:5000/tasks/${task.id}`, {
      method: "DELETE",
    })
      .then((newTasks = tasks.filter((t) => t.id !== task.id)))
      .then(setTasks(newTasks));

    console.log("red");
  };

  return (
    <Container className="task">
      <h3>
        {task.text} <DeleteIcon const deleteTask={deleteTask} />
      </h3>
      <p>{task.day}</p>
    </Container>
  );
}

function DeleteIcon({ deleteTask }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      width="17px"
      height="17px"
      y="0"
      fill="red"
      enableBackground="new 0 0 460.775 460.775"
      version="1.1"
      viewBox="0 0 460.775 460.775"
      xmlSpace="preserve"
      onClick={deleteTask}
    >
      <path d="M285.08 230.397L456.218 59.27c6.076-6.077 6.076-15.911 0-21.986L423.511 4.565a15.55 15.55 0 00-21.985 0l-171.138 171.14L59.25 4.565a15.551 15.551 0 00-21.985 0L4.558 37.284c-6.077 6.075-6.077 15.909 0 21.986l171.138 171.128L4.575 401.505c-6.074 6.077-6.074 15.911 0 21.986l32.709 32.719a15.555 15.555 0 0021.986 0l171.117-171.12 171.118 171.12a15.551 15.551 0 0021.985 0l32.709-32.719c6.074-6.075 6.074-15.909 0-21.986L285.08 230.397z"></path>
    </svg>
  );
}

const Container = styled.div`
  background: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;

  h3 {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
