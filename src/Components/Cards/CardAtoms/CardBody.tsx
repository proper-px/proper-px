import React from "react";
import styled from "styled-components";

interface IStyledCardBodyProps {}

interface ICardBodyProps extends IStyledCardBodyProps {}

const StyledCardBody = styled.div<IStyledCardBodyProps>`
  padding: ${(props) => props.theme.padding.base};
  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.dark};
  border-radius: 7px;
`;

const CardBody: React.FC<ICardBodyProps> = ({ children }) => {
  return <StyledCardBody>{children}</StyledCardBody>;
};

export default CardBody;
