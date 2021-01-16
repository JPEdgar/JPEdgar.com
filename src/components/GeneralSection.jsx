import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles.css";

import showcaseItem from "../images/BoA_JaceBk2-Cover.jpg";

function GeneralSection() {
  return (
    <Container>
      <Row>
        <Col>
          <p className="headerText">
            Bloodlines of Atmos, <br />
            the Story of Jace, Book 2 - Savior
          </p>
          <p className="headerSubtext">
            Now available!
            <br />
            <Link to="/.store">
              <span
                class="headerSubtext"
                style={{ textDecoration: "underline" }}
              >
                Get yours now!
              </span>
            </Link>{" "}
            Available in digital and softbound.
          </p>
          <img
            src={showcaseItem}
            alt="showcase item"
            className="showcaseItem"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default GeneralSection;

/*
function GeneralSection() {
  return (
    <div>
      <p className="headerText">
        Bloodlines of Atmos, <br />
        the Story of Jace, Book 2 - Savior
      </p>
      <p className="headerSubtext">
        Now available!
        <br />
        Get yours now! Available in digital and softbound.
      </p>
      <img src={showcaseItem} alt="showcase item" className="showcaseItem" />
    </div>
  );
}
*/
