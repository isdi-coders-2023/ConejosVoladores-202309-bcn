import React from "react";
import StyledButton from "./ButtonStyled";

interface ButtonProps {
  onClick: () => void;
  disabled: boolean;
  type: "reset" | "submit" | "button" | undefined;
  children: string;
}

const Button = ({
  onClick,
  disabled,
  children,
  type,
}: ButtonProps): React.ReactElement => {
  return (
    <StyledButton type={type} disabled={disabled} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
