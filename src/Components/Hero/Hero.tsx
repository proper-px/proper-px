import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "styled-bootstrap-grid";

export interface IStyledHeroProps {}

export interface IHeroProps extends IStyledHeroProps {
  title: string;
}

const StyledHero = styled.div<IStyledHeroProps>`
  width: 100%;
  padding-top: ${(props) => props.theme.spacing.large};
  padding-bottom: ${(props) => props.theme.spacing.small};
`;

const Hero: React.FC<IHeroProps> = (props) => {
  return (
    <StyledHero>
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
