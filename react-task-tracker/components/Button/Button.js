import Styled from "styled-components";

export default function Button({ btnLabel, bgColor, btnClickHandler }) {
  return (
    <StyledButton onClick={btnClickHandler} bgColor={bgColor}>
      {btnLabel}
    </StyledButton>
  );
}

const StyledButton = Styled.button`
  display: inline-block;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 15px;
  font-family: inherit;
  background-color: ${({ bgColor }) => bgColor};
`;
