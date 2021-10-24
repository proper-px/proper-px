import React from "react";
import styled from "styled-components";

interface IStyledCardFooterProps {}

interface ICardFooterProps extends IStyledCardFooterProps {}

const StyledCardFooter = styled.div<IStyledCardFooterProps>`
  padding: ${(props) => props.theme.padding.base};
`;

const CardFooter: React.FC<ICardFooterProps> = ({ children }) => {
  return <StyledCardFooter>{children}</StyledCardFooter>;
};

export default CardFooter;
