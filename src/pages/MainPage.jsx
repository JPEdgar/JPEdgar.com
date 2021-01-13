import React from "react";
import { Container, Row, Media, Image } from "react-bootstrap";

// custom components
import NavigationBar from "../components/NavigationBar";

// imports
import logo from "../images/dh_r_hrz_4cp_grd_pos.svg";

function HomePage() {
  return (
    <Container>
      <Row>
        {/* Logo/Name */}
        <Image className="mr-3" src={logo} />
        {/*<Image className="m-3" src="https://picsum.photos/100" roundedCircle />
        <h1 style={{ textAlign: "center", height: 100 }}>test</h1>
         <Media>
          <img
            className="m-3"
            src="https://picsum.photos/100"
            alt="stuff"
            roundedCircle
          />
          <Media.Body>
            <h5 className="mr-3" style={{ marginTop: "50px" }}>
              test
            </h5>
          </Media.Body>
        </Media> */}
      </Row>
      <NavigationBar />
    </Container>
  );
}

export default HomePage;
