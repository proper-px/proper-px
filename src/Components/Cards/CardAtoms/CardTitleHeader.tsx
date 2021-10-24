import React from "react";
import styled from "styled-components";

interface IStyledCardTitleHheaderProps {
  isOnTop: boolean;
}

interface ICardTitleHheaderProps extends IStyledCardTitleHheaderProps {
  title: string;
  subTitle?: string;
}

const StyledCardTitleHheader = styled.div<IStyledCardTitleHheaderProps>`
  padding: ${(props) => props.theme.padding.base};
`;

const CardTitleHheader: React.FC<ICardTitleHheaderProps> = ({ title, subTitle, isOnTop }) => {
  return (
    <StyledCardTitleHheader isOnTop={isOnTop}>
      <h4>{title}</h4>
      {subTitle && <h5>{subTitle}</h5>}
    </StyledCardTitleHheader>
  );
};

export default CardTitleHheader;
