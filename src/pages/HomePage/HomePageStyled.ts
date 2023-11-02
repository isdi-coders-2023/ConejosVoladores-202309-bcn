import styled from "styled-components";

const HomePageStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .homepage {
    &__title {
      font-family: ${({ theme }) => theme.typography.secondaryFontFamily};
      font-size: ${({ theme }) => theme.typography.titleSize};
      color: ${({ theme }) => theme.color.mainFont};
      font-weight: normal;
    }
  }
`;

export default HomePageStyled;
