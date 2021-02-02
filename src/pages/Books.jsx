import React, { useEffect, useState } from "react";
// import { Container, Row, Col } from "react-bootstrap";

import { baseUrl } from "../baseUrl";

// import Book from "../components/Book";

// import bookData from "../data/bookData.json";

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
    <>
      <img
        src={require("../data/public/images/test.jpg")}
        alt="test"
        style={{ color: "white" }}
        height="200px"
        width="200px"
      />
    </>
    // <Container>
    //   <p className="headerText">Books</p>
    //   <Row>
    //     <Col>
    //       {books &&
    //         books.map((book, key) => (
    //           <Book
    //             key={key}
    //             title={book.title}
    //             content={book.content}
    //             coverArt={book.coverArt}
    //             altText={book.altText}
    //           />
    //         ))}
    //     </Col>
    //   </Row>
    // </Container>
  );
}

export default Books;
