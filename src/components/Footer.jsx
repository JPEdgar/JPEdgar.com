import React from "react";
import { Container, Row, Col } from "react-bootstrap";


function Footer() {
  return (
    <Container>
      <hr className="lightLine" />
      <Row>
        <Col>
          <p className="content middle">
            This website is currently under construction.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className="content">Visit me on Facebook and Twitter</p>
          <a
            href="https://www.facebook.com/jpedgarbooks"
            target="_blank"
            rel="noreferrer"
            className="btn btn-social-icon btn-facebook"
          >
            <span className="fa fa-facebook" />
          </a>
          <a
            href="https://www.twitter.com/jpedgarbooks"
            target="_blank"
            rel="noreferrer"
            className="btn btn-social-icon btn-twitter"
          >
            <span className="fa fa-twitter" />
          </a>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col>
          <p className="copyright">
            Copyright ©2016-2021, J.P.Edgar. All rights reserved.
          </p>
        </Col>
        <Col>
          <a href="#">
            <p className="copyright right">Report a Problem</p>
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
