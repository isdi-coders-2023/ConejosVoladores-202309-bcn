import styled from "styled-components";

const LoadingStyled = styled.div`
  background-color: ${({ theme }) => theme.color.containerBackground};
  position: relative;
  width: 200px;
  height: 200px;
  display: inline-block;
  overflow: hidden;

  .logo__line--horizontal {
    position: relative;
    background-color: ${({ theme }) => theme.color.containerBackground};
    height: 5%;
    width: 88%;
    bottom: 25%;
    left: 5.5%;
    border-top-left-radius: 10px 0;
  }

  .logo__line--vertical {
    background-origin: border-box;
    position: relative;
    background-color: ${({ theme }) => theme.color.containerBackground};
    top: 1%;
    height: 98%;
    width: 10%;
    left: 30%;
  }

  .smash-logo {
    left: 20%;
    top: 20%;
    position: absolute;
    border-radius: 100%;
    height: 60%;
    width: 60%;
    background: ${({ theme }) => theme.color.logoMain};
    object-fit: contain;
  }

  .delta {
    top: 50px;
    position: absolute;
    color: ${({ theme }) => theme.color.logoMain};
  }

  @keyframes logo__ld {
    0% {
      transform: rotate(0deg);
    }

    50% {
      transform: rotate(180deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  .logo__ld {
    position: absolute;
    animation: ldio-q5r0pxxaf6b 1s linear infinite;
    width: 160px;
    height: 160px;
    top: 20px;
    left: 20px;
    border-radius: 50%;
    box-shadow: 0 4px 0 0 var(--main-color);
    transform-origin: 80px 82px;
    box-sizing: content-box;
  }

  .logo__ld {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(1);
    backface-visibility: hidden;
    transform-origin: 0 0;
  }
`;

export default LoadingStyled;
