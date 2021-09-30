import React from "react";

import { IStyledButtonProps, StyledButton } from "./StyledButton";

export interface IButtonProps extends IStyledButtonProps {
  label: string;
  action: () => void;
}

const Button: React.FC<IButtonProps> = ({ color, isOutlined, action, label }) => {
  return (
    <StyledButton color={color} isOutlined={isOutlined} onClick={action}>
      {label}
    </StyledButton>
  );
};

export default Button;
