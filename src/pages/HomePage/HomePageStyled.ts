import styled from "styled-components";

const HomePageStyled = styled.h2`
  display: flex;
  justify-content: space-around;
  font-family: ${({ theme }) => theme.typography.secondaryFontFamily};
  font-size: ${({ theme }) => theme.typography.titleSize};
  color: ${({ theme }) => theme.color.mainFont};
  font-weight: normal;
`;

export default HomePageStyled;
