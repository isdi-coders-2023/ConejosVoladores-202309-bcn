import styled from "styled-components";

const NavigationBarStyled = styled.nav`
  position: sticky;
  bottom: 0;
  border-top: solid;

  .navigation {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 67px;
    padding: 10px;
    background-color: ${({ theme }) => theme.color.containerBackground};
  }

  .navigation__icon {
    height: 48px;
    width: 48px;

    &--active {
      filter: invert(100%);
      border: 3px solid ${({ theme }) => theme.color.secondaryFont};
      border-radius: 100%;
    }
  }
`;

export default NavigationBarStyled;
