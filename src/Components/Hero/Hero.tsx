import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "styled-bootstrap-grid";
import Button from "Components/Buttons/Button";

type HeroVariants = "primary" | "secondary" | "light" | "dark";

export interface IStyledHeroProps {
  variant: HeroVariants;
}

export interface IHeroProps extends IStyledHeroProps {
  title: string;
  buttonColor: string;
}

const StyledHero = styled.div<IStyledHeroProps>`
  width: 100%;
  padding-top: ${(props) => props.theme.spacing.large};
  padding-bottom: ${(props) => props.theme.spacing.small};
  background-color: ${(props) => props.theme.heroVariants[props.variant].bgColor};
  color: ${(props) => props.theme.heroVariants[props.variant].fgColor};
`;

const Hero: React.FC<IHeroProps> = (props) => {
  return (
    <StyledHero variant={props.variant}>
      <Container>
        <Row>
          <Col>
            <h1>{props.title}</h1>
          </Col>
        </Row>
      </Container>
    </StyledHero>
  );
};

export default Hero;
