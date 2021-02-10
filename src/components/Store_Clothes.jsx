import React from "react";
import { Col, Image, Button } from "react-bootstrap";
import { baseUrl } from "../baseUrl";

function StoreClothes({ clothingInfo }) {
  return (
    <Col sm={4}>
      <Image
        src={`${baseUrl}${clothingInfo.image}`}
        thumbnail
        style={{ width: "90%" }}
        alt={clothingInfo.altText}
      />
      <Button className="storeButton">{clothingInfo.title}</Button>
    </Col>
  );
}

export default StoreClothes;
