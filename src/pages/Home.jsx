import React from "react";
import { Container, Image, Row, Col } from "react-bootstrap";

// custom components
import NavigationBar from "../components/NavigationBar";
import MainHeader from "../components/MainHeader";
import GeneralSection from "../components/GeneralSection";
import BlogSection from "../components/BlogSection";

// pages
import About from "./About";
import Store from "./Store";

function HomePage() {
  return (
    <Container>
      <Row>
        {/* Logo/Name */}
        <Image className="mr-3" src="https://picsum.photos/64" roundedCircle />
        <h2 className="align-self-center">Info</h2>
      </Row>

      <NavigationBar />
      <MainHeader />
      <Row>
        {/* Main Body */}
        <Col sm={8}>
          {/* Left-Hand Section */}
          <GeneralSection />
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
