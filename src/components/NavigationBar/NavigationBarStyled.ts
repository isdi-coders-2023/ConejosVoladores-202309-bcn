import styled from "styled-components";

const NavigationBarStyled = styled.nav`
  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .active {
    img {
      border: 3px solid black;
      border-radius: 100%;
    }
  }
`;

export default NavigationBarStyled;
