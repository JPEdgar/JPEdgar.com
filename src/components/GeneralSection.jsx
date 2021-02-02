import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

// import showcaseItem from "../data/images/BoA_JaceBk2_Cover.jpg";
// import { baseUrl } from "../baseUrl";

function GeneralSection() {
  // useEffect(() => {
  //   fetch(`${baseUrl}/bookData.json`)
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //     });
  // }, []);

  return (
    <Container>
      <Row>
        <Col>
          <p className="headerText middle">
            Bloodlines of Atmos, <br />
            the Story of Jace, Book 2 - Savior
          </p>
          <p className="headerSubtext middle">
            Now available!
            <br />
            <Link to="/.store">
              <span
                className="headerSubtext"
                style={{ textDecoration: "underline" }}
              >
                Get yours now!
              </span>
            </Link>{" "}
            Available in digital and softbound.
          </p>
          <Link to="./store">
            {/* <img
              src={showcaseItem}
              alt="showcase item"
              className="showcaseItem"
            /> */}
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default GeneralSection;
