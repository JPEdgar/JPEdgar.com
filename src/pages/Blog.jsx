import React from "react";
import { Container } from "react-bootstrap";

import BlogEditor from "../components/BlogEditor"

function Blog() {

  return (
    <Container>
      <p className="headerText">Blog</p>
      <div style={{backgroundColor: "lightgray", padding: "10px 20px"}}>

      <BlogEditor />
      </div>
    </Container>
  );
}

export default Blog;

