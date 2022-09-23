import Button from "../Button/Button";
import styled from "styled-components";
import { useShowFormContext } from "../../context/showFormContext";

export default function Header() {
  const { showAddTaskForm, toggleAddTaskForm } = useShowFormContext();

  return (
    <StyledHeader>
      <h1>Task Tracker</h1>
      <Button
        bgColor={showAddTaskForm ? "red" : "green"}
        btnClickHandler={toggleAddTaskForm}
        btnLabel={showAddTaskForm ? "Close" : "Add"}
      />
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;
