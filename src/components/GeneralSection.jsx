import React, { useEffect, useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import { baseUrl } from "../baseUrl";

function GeneralSection() {
  const [books, setBooks] = useState(null);
  const [apparel, setApparel] = useState(null);
  const showcaseItem = {
    headline: "",
    image: "",
  };
  const secondaryItem = {
    headline: "",
    image: "",
    content:
      "Check out the store to see the official Bloodlines of Atmos apparel -- hoodies, t-shirts, and v-necks are available in various sizes.",
  };

  useEffect(() => {
    fetch(`${baseUrl}Books`)
      .then((res) => {
        return res.json();
      })
      .then((bookData) => {
        setBooks(bookData);
      });

    fetch(`${baseUrl}Apparel`)
      .then((res) => {
        return res.json();
      })
      .then((apparelData) => {
        setApparel(apparelData);
      });
  }, []);

  if (books) {
    showcaseItem.headline = books[1].title;
    showcaseItem.image = `${baseUrl}${books[1].coverArt}`;
  }
  if (apparel) {
    secondaryItem.headline = apparel[4].title;
    secondaryItem.image = `${baseUrl}${apparel[4].image}`;
  }

  return (
    <Container>
      <Row>
        <Col>
          <p className="headerText middle">{showcaseItem.headline}</p>
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
            Available in digital, softbound, and audio formats.
          </p>
          <Link to="./store">
            <Image
              src={showcaseItem.image}
              alt="showcase item"
              thumbnail
              className="showcaseItem"
            />
          </Link>
        </Col>
      </Row>

      <hr className="lightLine" />
      <Row className="mt-4">
        <Col>
          <p className="headerText middle">
            The store has been updated with BoA Bk2 products.
          </p>

          <Link to="./store">
            <Image
              src={secondaryItem.image}
              alt={secondaryItem.headline}
              className="showcaseItem"
              thumbnail
            />
          </Link>
          <p className="headerSubtext middle">{secondaryItem.content}</p>
        </Col>
      </Row>
    </Container>
  );
}

export default GeneralSection;
