import Link from "next/link";
import styled from "styled-components";

export default function About() {
  return (
    <StyledFooter>
      <p>Copyright &copy; 2022</p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </StyledFooter>
  );
}

const StyledFooter = styled.header`
  margin-top: 30px;
  text-align: center;
`;
