import React from "react";
import { Container } from "react-bootstrap";

import BlogEditor from "../components/BlogEditor"

function Blog() {

  return (
    <Container>
      <p className="headerText">Blog</p>
      <BlogEditor />
    </Container>
  );
}

export default Blog;

