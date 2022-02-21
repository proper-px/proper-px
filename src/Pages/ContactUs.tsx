import SingleLineText from "Components/Forms/Inputs/SingleLineText";
import React, { useState } from "react";
import { Container, Row, Col } from "styled-bootstrap-grid";

interface IContactUsPageProps {}

const ContactUsPage = (props: IContactUsPageProps) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });

  const handleInputChange = (event: any) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Container>
      <Row justifyContent="center">
        <Col md={6}>
          <form>
            <SingleLineText label="First name" name="firstName" id="firstName" handleChange={handleInputChange} isrounded={false} bordercolor={"primary"} />
            <SingleLineText label="Last name" name="lastName" id="lastName" handleChange={handleInputChange} isrounded={false} bordercolor={"primary"} />
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUsPage;
