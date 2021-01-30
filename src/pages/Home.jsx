import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import MainHeader from "../components/MainHeader";
import GeneralSection from "../components/GeneralSection";
import BlogSection from "../components/BlogSection";
import SecondaryItem from "../components/SecondaryItem";

function HomePage() {
  return (
    <Container>
      <MainHeader />
      <Row>
        {/* Main Body */}
        <Col sm={8}>
          {/* Left-Hand Section */}
          <GeneralSection />
          <SecondaryItem />
        </Col>
        <Col sm={4}>
          {/* Right-Hand Section (Blog) */}
          <BlogSection />
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
