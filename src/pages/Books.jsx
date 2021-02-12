import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import { baseUrl } from "../baseUrl";

import Book from "../components/Book";

function Books() {
  const [books, setBooks] = useState(null);
  useEffect(() => {
    fetch(`${baseUrl}Books`)
      .then((res) => {
        return res.json();
      })
      .then((bookData) => {
        setBooks(bookData);
      });
  }, []);

  return (
    <Container>
      <p className="headerText">Books</p>
      <Row>
        <Col>
          {books &&
            books.map((bookData, key) => (
              <Book
                key={key}
                title={bookData.title}
                content={bookData.content}
                coverArt={`${baseUrl}${bookData.coverArt}`}
                altText={bookData.altText}
              />
            ))}
        </Col>
      </Row>
    </Container>
  );
}

export default Books;
    