import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

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
          <p className="d-none d-sm-block storeSubHeader">Book</p>
        </Col>
        <Col sm={3}>
          <p className="d-none d-sm-block storeSubHeader">
            Physical Soft-Bound
          </p>
        </Col>
        <Col sm={3}>
          <p className="d-none d-sm-block storeSubHeader">Digital E-Reader</p>
        </Col>
        <Col sm={3}>
          <p className="d-none d-sm-block storeSubHeader">Audiobook</p>
        </Col>
      </Row>
      <Row>
        <Col>
          {bookStore &&
            bookStore.map((book) => {
              return <StoreBook key={book.id} bookInfo={book} />;
            })}
        </Col>
      </Row>
      <hr className="lightLine" />
      <p className="storeSubHeader">Apparel</p>
      <p className="content mb-1">All clothing is done by a third-party.</p>
      <Button
        className="btn btn-light mb-2"
        href="https://www.etsy.com/shop/JPEdgarBooks"
        target="_blank"
      >
        Click here to view full apparel store
      </Button>
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
