import styled from "styled-components";

const HomePageStyled = styled.section`
  display: flex;
  justify-content: space-around;
  font-family: ${({ theme }) => theme.typography["mainFontFamily"]};
  font-size: ${({ theme }) => theme.typography["titleSize"]};
  color: ${({ theme }) => theme.color["mainFont"]};
`;

export default HomePageStyled;
