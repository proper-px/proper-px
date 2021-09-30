import Hero from "Components/Hero/Hero";
import React, { ChangeEventHandler, useEffect, useState, useRef, createRef } from "react";
import { Container, Row, Col } from "styled-bootstrap-grid";

interface IHomePageProps {}

const HomePage: React.FC<IHomePageProps> = (props) => {
  return (
    <>
      <Hero buttonColor="secondary" title="Hello World" variant="secondary" />
    </>
  );
};

export default HomePage;
