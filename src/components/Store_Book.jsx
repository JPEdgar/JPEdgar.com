import React from "react";
import { Row, Col, Image, Button } from "react-bootstrap";
import { baseUrl } from "../baseUrl";

function StoreBook({ bookInfo }) {
  return (
    <Row>
      <Col sm={3}>
        <Image
          src={`${baseUrl}${bookInfo.coverArt}`}
          thumbnail
          alt={bookInfo.altText}
        />
        <p className="headerSubtext middle mt-1">{bookInfo.title}</p>
      </Col>
      <Col sm={3}>
        {bookInfo.availPhysical &&
          bookInfo.physicalLinks.map((data, key) => {
            if (data.vendor) {
              return (
                <Button className="btn btn-light storeButton" key={key} href={data.url} target="_blank">
                  <span className="d-inline d-sm-none">Physical copy: </span>
                  {data.vendor}
                </Button>
              );
            }
            return null;
          })}
      </Col>
      <Col sm={3}>
        {bookInfo.availDigital &&
          bookInfo.digitalLinks.map((data, key) => {
            if (data.vendor) {
              return (
                <Button className="btn btn-light storeButton" key={key} href={data.url} target="_blank">
                  <span className="d-inline d-sm-none">Digital copy: </span>
                  {data.vendor}
                </Button>
              );
            }
            return null;
          })}
      </Col>
      <Col sm={3}>
        {bookInfo.availAudio &&
          bookInfo.audioLinks.map((data, key) => {
            if (data.vendor) {
              return (
                <Button className="btn btn-light storeButton" key={key} href={data.url} target="_blank">
                  <span className="d-inline d-sm-none">Audio copy: </span>
                  {data.vendor}
                </Button>
              );
            }
            return null;
          })}
      </Col>
      <div className="mb-3" />
    </Row>
  );
}

export default StoreBook;

/*

  <Row>
      <Col sm={3}>
        <Image
          src={`${baseUrl}${bookInfo.coverArt}`}
          thumbnail
          style={{ width: "90%" }}
          alt={bookInfo.altText}
        />
        <p className="headerSubtext middle">{bookInfo.title}</p>
      </Col>
      <Col sm={3}>
        {bookInfo.availPhysical &&
          bookInfo.physicalLinks.map((data, key) => {
            if (data.vendor) {
              return (
                <Button className="btn btn-light storeButton" key={key}>
                  {data.vendor}
                </Button>
              );
            }
            return null;
          })}
      </Col>
      <Col sm={3}>
        {bookInfo.availDigital &&
          bookInfo.digitalLinks.map((data, key) => {
            if (data.vendor) {
              return (
                <Button className="btn btn-light storeButton" key={key}>
                  {data.vendor}
                </Button>
              );
            }
            return null;
          })}
      </Col>
      <Col sm={3}>
        {bookInfo.availAudio &&
          bookInfo.audioLinks.map((data, key) => {
            if (data.vendor) {
              return (
                <Button className="btn btn-light storeButton" key={key}>
                  {data.vendor}
                </Button>
              );
            }
            return null;
          })}
      </Col>
    </Row>

*/
