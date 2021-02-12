import React from "react";
import { Image, Row, Col, Button } from "react-bootstrap";

function Book({ title, content, coverArt, altText }) {
  return (
    <>
      <Row style={{ display: "flex" }}>
        <Col xs={5}>
          <Image src={coverArt} thumbnail alt={altText} />
        </Col>
        <Col xs={1} />
        <Col xs={6}>
          <p className="headerText">{title}</p>
          <div className="d-none d-sm-inline">
            {content.map((data, key) => (
              <p key={key} className="content ">
                {data}
              </p>
            ))}
          </div>
        </Col>
      </Row>
      <Row>
        <Col xs={5}>
          <Button className="booksButton btn btn-light">Read a Snippet</Button>
          <Button className="booksButton btn btn-light">
            Listen to a Snippet
          </Button>
          <Button className="booksButton btn btn-light">Purchase</Button>
        </Col>
        <Col xs={7} />
      </Row>
      <hr className="lightLine" />
    </>
  );
}

export default Book;

/*    
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
            <p key={key} className="content">
              {data}
            </p>
          ))}
        </Col>
      </Row>
      <Row style={{ marginLeft: "auto", marginRight: "auto" }}>
        <Col xs={5}>
          <Button className="booksButton btn btn-light">Read Snippet</Button>
          <Button className="booksButton btn btn-light">Listen</Button>
          <Button className="booksButton btn btn-light">Purchase</Button>
        </Col>
        <Col xs={7} />
      </Row>
      <hr className="lightLine" />
    </Container>

*/
