import React from "react";
import { Col, Image, Button } from "react-bootstrap";
import { baseUrl } from "../baseUrl";

function StoreClothes({ clothingInfo }) {
  return (
    <Col sm={4}>
      <Image
        src={`${baseUrl}${clothingInfo.image}`}
        thumbnail
        alt={clothingInfo.altText}
      />
      <Button
        className="btn btn-light storeButton mt-0 mb-3"
        href={clothingInfo.url}
        target="_blank"
      >
        {clothingInfo.title}
      </Button>
    </Col>
  );
}

export default StoreClothes;

/*
    <Col sm={4}>
      <Image
        src={`${baseUrl}${clothingInfo.image}`}
        thumbnail
        alt={clothingInfo.altText}
      />
      <Button className="btn btn-light storeButton mb-3">
        {clothingInfo.title}
      </Button>
    </Col>
*/
