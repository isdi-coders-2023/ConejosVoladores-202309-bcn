import styled from "styled-components";

const NavigationBarStyled = styled.nav`
  position: sticky;
  bottom: 0;
  border-top: solid;
  width: 100%;
  height: 67px;
  position: fixed;

  .navigation {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    background-color: ${({ theme }) => theme.color.containerBackground};
  }

  .navigation__icon {
    height: 48px;
    width: 48px;
    border-radius: 100%;
    border: 3px solid ${({ theme }) => theme.color.secondaryFont};
  }

  .active {
    filter: invert(100%);
    border-radius: 100%;
    border: 3px solid ${({ theme }) => theme.color.secondaryFont};
    background-color: ${({ theme }) => theme.color.secondaryFont};
  }
`;

export default NavigationBarStyled;
