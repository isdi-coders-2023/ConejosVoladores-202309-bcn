import styled from "styled-components";

const HomePageStyled = styled.section`
  display: flex;
  justify-content: space-around;
  font-family: ${({ theme }) => theme.typography.secondaryFontFamily};
  font-size: ${({ theme }) => theme.typography.titleSize};
  color: ${({ theme }) => theme.color.mainFont};
`;

export default HomePageStyled;
