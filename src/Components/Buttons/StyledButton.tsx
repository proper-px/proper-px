import styled from "styled-components";
import React from "react";

export interface IStyledButtonProps {
  color: string;
  isOutlined: boolean;
}

export const StyledButton = styled.button<IStyledButtonProps>`
  display: inline-block;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 500;
  line-height: 1;
  color: ${(props) => props.theme.buttonVariants[props.color].fgColor};
  text-align: center;
  text-decoration: normal;
  white-space: none;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  background-color: ${(props) => props.theme.buttonVariants[props.color].bgColor};
  border: 2px solid transparent;
  padding: 0.25rem 0.75rem;
  &:hover {
    background-color: ${(props) => props.theme.buttonVariants[props.color].hoverColor};
  }
`;
