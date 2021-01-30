import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Book from "../components/Book";

// import bookData from "../data/bookData.json";

function Books() {
  useEffect(() => {
    fetchItems();
  }, []);
  const fetchItems = async () => {
    const data = await fetch("../data/bookData.json");
    const items = await data.json();
    // console.log(items);
  };

  return (
    <Container>
      <p className="headerText">Books</p>
      <Row>
        <Col>
          {/* {bookData.map((book, key) => (
            <Book
              key={key}
              title={book.title}
              content={book.content}
              coverArt={book.coverArt}
            />
          ))} */}
        </Col>
      </Row>
    </Container>
  );
}

export default Books;
