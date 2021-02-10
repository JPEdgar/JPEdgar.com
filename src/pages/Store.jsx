import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import StoreBook from "../components/Store_Book";
import StoreClothes from "../components/Store_Clothes";
import { baseUrl } from "../baseUrl";

function Store() {
  const [bookStore, setBookStore] = useState(null);
  const [clothingStore, setClothingStore] = useState(null);

  useEffect(() => {
    fetch(`${baseUrl}Books`)
      .then((res) => {
        return res.json();
      })
      .then((bookData) => {
        setBookStore(bookData);
      });

    fetch(`${baseUrl}Apparel`)
      .then((res) => {
        return res.json();
      })
      .then((bookData) => {
        setClothingStore(bookData);
      });
  }, []);

  return (
    <Container>
      <p className="headerText">Store</p>
      <Row>
        <Col sm={3}>
          <p className="storeSubHeader">Book</p>
        </Col>
        <Col sm={3}>
          <p className="storeSubHeader">Soft-Bound/Physical</p>
        </Col>
        <Col sm={3}>
          <p className="storeSubHeader">Digital/E-Reader</p>
        </Col>
        <Col sm={3}>
          <p className="storeSubHeader">Audiobook</p>
        </Col>
      </Row>
      <Row>
        {bookStore &&
          bookStore.map((book) => {
            return <StoreBook key={book.id} bookInfo={book} />;
          })}
      </Row>
      <hr className="lightLine" />
      <p className="storeSubHeader">Apparel</p>
      <Row>
        {clothingStore &&
          clothingStore.map((clothing) => {
            return <StoreClothes key={clothing.id} clothingInfo={clothing} />;
          })}
      </Row>
    </Container>
  );
}

export default Store;
