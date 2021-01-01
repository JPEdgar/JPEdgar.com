import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "../styles.css";

function NavigationBar() {
  return (
    <div>
      <Navbar className="jp-nav">
        <Nav>
          <Nav.Link href="#">Home</Nav.Link>
          <NavDropdown title="test" id="">
            <NavDropdown.Item href="#">BoA 1</NavDropdown.Item>
            <NavDropdown.Item href="#">BoA 2</NavDropdown.Item>
            <NavDropdown.Item href="#">BoA 3</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#">Gobs</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Str" id="">
            <NavDropdown.Item href="#">B's</NavDropdown.Item>
            <NavDropdown.Item href="#">App</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#">B</Nav.Link>
          <Nav.Link href="#">Abt</Nav.Link>
          <Nav.Link href="#">Ctct</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
