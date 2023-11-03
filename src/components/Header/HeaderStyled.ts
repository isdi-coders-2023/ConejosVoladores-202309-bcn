import styled from "styled-components";

const HeaderStyled = styled.header`
  position: sticky;
  top: 0;
  border-bottom: solid;

  .header {
    padding: 20px 22px;
    display: flex;
    align-items: center;
    gap: 25px;
    background-color: ${({ theme }) => theme.color.containerBackground};

    &__logo {
      width: 48px;
      height: 48px;
    }

    &__title {
      font-family: ${({ theme }) => theme.typography.secondaryFontFamily};
      font-size: ${({ theme }) => theme.typography.headerSize};
    }
  }
`;

export default HeaderStyled;
