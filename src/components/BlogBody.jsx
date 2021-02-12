import React from "react";
import { Card } from "react-bootstrap";

function BlogBody() {
  return (
    <Card.Body>
      <Card.Title className="headerSubtext">Blog Date</Card.Title>
      <Card.Text className="content">Blog Snippet</Card.Text>
    </Card.Body>
  );
}

export default BlogBody;
