import React from "react";
import { Container } from "react-bootstrap"; 

function About() {
  return (
    <Container>
      <p className="headerText">About</p>
      <p className="content">
        J. P. Edgar is an American author who was born in Sacramento, California
        in 1980. He went to college to obtain his Associate's Degree in
        Information Technology, and then got his Bachelor's Degree in 2010 in
        Game Design.
      </p>
      <p className="content">
        A man of many faces, J. P. Edgar is a musician, a technical artist, a
        game designer, and a computer programmer.
      </p>
      <p className="content">
        Now, he is working on the Bloodlines of Atmos series, expanding his web
        of talents to the art of story writing. Currently, he is writing book 3
        of Jace.
      </p>
    </Container>
  );
}

export default About;
