import styled from "styled-components";

const NavigationBarStyled = styled.nav`
  .footer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 67px;
    padding: 10px;
    background-color: ${({ theme }) => theme.color.containerBackground};
  }

  .footer__icon {
    height: 48px;
  }

  .active {
    img {
      border: 3px solid black;
      border-radius: 100%;
      height: 48px;
    }
  }
`;

export default NavigationBarStyled;
