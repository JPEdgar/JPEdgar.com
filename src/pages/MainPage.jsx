import React from "react";
import { Container, Row, Media } from "react-bootstrap";

// custom components
import NavigationBar from "../components/NavigationBar";

// imports
import logo from "../data/public/images/Logo_JPEdgar.png";

function HomePage() {
  return (
    <Container>
      <Row>
        <Media>
          <img className="m-3 logoImage" src={logo} alt="stuff" />
          <Media.Body className="align-self-center">
            <h5 className="logoText">J.P.Edgar</h5>
          </Media.Body>
        </Media>
      </Row>
      <NavigationBar />
    </Container>
  );
}

export default HomePage;
