import React from "react";
import { Card } from "react-bootstrap";

import BlogBody from "./BlogBody";

function BlogSection() {
  return (
    <div>
      <Card.Header>Blog Header</Card.Header>
      <BlogBody />
      <BlogBody />
      <BlogBody />
    </div>
  );
}

export default BlogSection;
