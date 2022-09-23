import styled from "styled-components";

const handleSubmit = (e) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);

  console.log(data);
};

export default function AddTask() {
  return (
    <StyledForm className="add-form" onSubmit={handleSubmit}>
      <div className="form-control">
        <label for="text">Task</label>
        <input type="text" name="task" id="text" placeholder="Add Task" />
      </div>
      <div className="form-control">
        <label for="day">Day & Time</label>
        <input type="text" name="day" id="day" placeholder="Add Day & Time" />
      </div>
      <input type="submit" value="Save Task" className="btn btn-block" />
    </StyledForm>
  );
}

const StyledForm = styled.form`
  margin-bottom: 40px;
`;
