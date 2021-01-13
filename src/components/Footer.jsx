import React from "react";
import { Container, Row, Col } from "react-bootstrap";
function Footer() {
  return (
    <Container>
      <hr />
      <Row>
        <Col>visit social</Col>
        <Col>like/share</Col>
        <Col />
      </Row>
      <Row>
        <Col>visit social icons</Col>
        <Col>like/share icons</Col>
        <Col>report a problem</Col>
      </Row>
      <p>Copyright info</p>
    </Container>
  );
}

export default Footer;
