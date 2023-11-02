import styled from "styled-components";

const StyledButton = styled.button`
  width: 200px;
  height: 54px;
  background-color: ${({ theme }) => theme.color.containerBackground};
  border: 1px solid ${({ theme }) => theme.color.mainFont};
  border-radius: 50px;
  font-family: ${({ theme }) => theme.typography.mainFontFamily};
  box-shadow: 0px 4px 4px 0px;
  color: ${({ theme }) => theme.color.mainFont};
  text-align: center;
  font-size: ${({ theme }) => theme.typography.inputTextSize};
  font-weight: 700;
  line-height: 52px;

  &:disabled {
    background-color: ${({ theme }) => theme.color.disabledButtonBackground};
  }
`;

export default StyledButton;
