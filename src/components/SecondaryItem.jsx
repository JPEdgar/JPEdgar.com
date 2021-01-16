import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import showcaseItem from "../images/BoA_JaceBk2_Tee.jpg";

import "../styles.css";

function MainItem() {
  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <p className="headerText">
            The store has been updated with BoA Bk2 products.
          </p>
          {/* <Image src={showcaseItem} thumbnail /> */}
          <Link to="./store">
            <img
              src={showcaseItem}
              alt="showcase item"
              className="showcaseItem"
            />
          </Link>
          <p className="headerSubtext">
            Check out the store to see the official Bloodlines of Atmos apparel
            -- hoodies, t-shirts, and v-necks are available in various sizes.{" "}
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default MainItem;
