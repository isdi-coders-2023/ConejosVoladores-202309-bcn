import styled from "styled-components";

const MainHeaderStyled = styled.header`
  .header {
    width: 100vw;
    height: 88px;
    padding: 20px 22px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 35px;
    flex-shrink: 0;
    background-color: ${({ theme }) => theme.color["containerBackground"]};

    &__logo {
      width: 48px;
      height: 48px;
    }

    &__title {
      text-align: center;
      font-family: ${({ theme }) => theme.typography["secondaryFontFamily"]};
      font-size: ${({ theme }) => theme.typography["headerSize"]};
    }
  }
`;
export default MainHeaderStyled;