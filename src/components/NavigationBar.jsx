import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function NavigationBar() {
  return (
    <div>
      <Navbar>
        <Nav>
          <Nav.Link href="#">Home</Nav.Link>
          <NavDropdown title="Books" id="">
            <NavDropdown.Item href="#">
              Bloodlines of Atmos, The Book of Jace, Book 1
            </NavDropdown.Item>
            <NavDropdown.Item href="#">
              Bloodlines of Atmos, The Book of Jace, Book 2
            </NavDropdown.Item>
            <NavDropdown.Item href="#">
              Bloodlines of Atmos, The Book of Jace, Book 3
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#">Gobs</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Store" id="">
            <NavDropdown.Item href="#">Books</NavDropdown.Item>
            <NavDropdown.Item href="#">Apparel</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#">Blog</Nav.Link>
          <Nav.Link href="#">About</Nav.Link>
          <Nav.Link href="#">Contact</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
