import React from "react";
import { Image, Container, Row, Col, Button } from "react-bootstrap";

function Book({ title, content, coverArt, altText }) {
  console.log(coverArt);
  return (
    <>
      <Container style={{ marginLeft: "auto", marginRight: "auto" }}>
        <Row style={{ display: "flex" }}>
          <Col xs={5}>
            <Image
              src={coverArt}
              thumbnail
              style={{ width: "90%" }}
              alt={altText}
            />
          </Col>
          <Col xs={1} />
          <Col xs={6}>
            <p className="headerText">{title}</p>
            {content.map((data, key) => (
              <p key={key} className="content">{data}</p>
            ))}
          </Col>
        </Row>
        <Row style={{ marginLeft: "auto", marginRight: "auto" }}>
          <Col xs={5}>
            <Button className="booksButton btn btn-primary">
              Read Snippet
            </Button>
            <Button className="booksButton btn btn-primary">Listen</Button>
            <Button className="booksButton btn btn-primary">Purchase</Button>
          </Col>
          <Col xs={7} />
        </Row>
        <hr className="lightLine" />
      </Container>
    </>
  );
}

export default Book;

/*


function Book() {
  return (
    <Container style={{marginLeft: "auto", marginRight: "auto"}}>
      <Row style={{display: "flex"}}>
        <Col xs={5}>
          <Image src={Book2} thumbnail style={{ width: "90%" }} />
        </Col>
        <Col xs={1} />
        <Col xs={6}>
          <p className="headerText">
            Bloodlines of Atmos, the Story of Jace, Book 2 - Savior
          </p>
          <p className="content">
            Forced to leave his sister behind when he turned 18, the story of
            Jace continues after his time in Sanctuary of Orphaned Children. He
            follows the path he paved to fight for humankind’s survival against
            the Evolved.
          </p>
          <p className="content">
            But what can one man do when pitted against magic users, massive
            stone golems, winged monsters, and other deadly creatures? And if he
            goes on this dangerous quest, what about his sister? And what about
            the suspicious activities at the orphanage?{" "}
          </p>
          <p className="content">
            In order to find the truth, he’ll have to call on old favors and see
            childhood acquaintances. Hopefully, that’ll be enough.{" "}
          </p>
        </Col>
      </Row>
      <Row style={{marginLeft: "auto", marginRight: "auto"}}>
        <Col xs={5}>
          <Button className="booksButton btn btn-primary">Read Snippet</Button>
          <Button className="booksButton btn btn-primary">Listen</Button>
          <Button className="booksButton btn btn-primary">Purchase</Button>
        </Col>
        <Col xs={7} />
      </Row>
      <hr className="lightLine" />
    </Container>
  );
}
*/
