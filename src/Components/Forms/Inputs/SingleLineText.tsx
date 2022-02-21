import React from "react";
import styled from "styled-components";

interface IInputBaseProps {
  label: string;
  initialValue?: string;
  placeholder?: string;
  helperText?: string;
  name: string;
  id: string;
  handleChange: (event: any) => void;
  required?: boolean;
}

interface IStyledSingleLineTextProps {
  isrounded: boolean;
  bordercolor: "primary" | "tertiary";
}

interface ISingleLineTextProps extends IStyledSingleLineTextProps, IInputBaseProps {}

const StyledSingleLineText = styled.input<IStyledSingleLineTextProps>`
  display: block;
  border: 1px solid ${(props) => props.theme.brandColors[props.bordercolor]};
  background-color: ${(props) => props.theme.colors.white};
  padding: ${(props) => props.theme.padding.small} ${(props) => props.theme.padding.base};
  width: 100%;
  &:focus {
    outline: none;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  }
`;

export const StyledFormGroup = styled.div`
  display: block;
  margin-bottom: 10px;
`;
export const StyledFormLabel = styled.label`
  display: block;
  margin-bottom: 5px;
`;

const SingleLineText: React.FC<ISingleLineTextProps> = (props) => {
  return (
    <StyledFormGroup>
      <StyledFormLabel htmlFor={props.id}>{props.label}</StyledFormLabel>
      <StyledSingleLineText
        isrounded={props.isrounded}
        bordercolor={props.bordercolor}
        name={props.name}
        id={props.id}
        onChange={props.handleChange}
        placeholder={props.placeholder}
        required={props.required}
      />
      <p>{props.helperText}</p>
    </StyledFormGroup>
  );
};

export default SingleLineText;
