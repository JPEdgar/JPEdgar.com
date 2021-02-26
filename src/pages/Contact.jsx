import React from "react";
import { Container, Form, Button } from "react-bootstrap";

function Contact() {
  return (
    <Container>
      <p className="headerText">Contact</p>
      <Form>
        <Form.Group controlId="formBasicPassword">
          <Form.Label className="content">Your name</Form.Label>
          <Form.Control type="text" placeholder="Your name" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label className="content">Your email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="content">
            Your email with never be shared with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicMessage">
          <Form.Label className="content">Your message</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Message" />
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox">
          <Form.Label className="content mr-2">
            Are you a human or a bot?
          </Form.Label>
          <Form.Check
            inline
            className="content"
            type="checkbox"
            label="I'm a robot."
          />

          <Form.Check
            inline
            className="content"
            type="checkbox"
            label="I am human!"
          />
        </Form.Group>
      </Form>
          <Button className="btn btn-light storeButton">Submit</Button>
    </Container>
  );
}

export default Contact;
