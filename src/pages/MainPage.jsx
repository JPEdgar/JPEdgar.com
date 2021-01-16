import React from "react";
import { Container, Row, Media, Image } from "react-bootstrap";

// custom components
import NavigationBar from "../components/NavigationBar";
import TagLine from "../components/TagLine";
// imports
// import logo from "../images/dh_r_hrz_4cp_grd_pos.svg";
import logo from "../images/Logo_JPEdgar.png";

function HomePage() {
  return (
    <Container>
      <Row>
        {/* Logo/Name */}
        {/* <Image className="mr-3" src={logo} /> */}
        {/* {/*<Image className="m-3" src="https://picsum.photos/100" roundedCircle /> */}
        {/* <h1 style={{ textAlign: "center", height: 100 }}>test</h1> */}
        <Media>
          <img className="m-3 logoImage" src={logo} alt="stuff" />
          <Media.Body className="align-self-center">
            <h5 className="logoText">J.P.Edgar</h5>
          </Media.Body>
        </Media>{" "}
      </Row>
      <NavigationBar />
    </Container>
  );
}

export default HomePage;
