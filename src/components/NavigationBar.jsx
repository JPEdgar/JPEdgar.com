import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "../styles.css";

function NavigationBar() {
  return (
    <div className="navBar">
      <Nav justify bg="dark">
        <Nav.Item>
          <Link to="/">
            <p className="menuItem">Home</p>
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/about">
            <p className="menuItem">About</p>
          </Link>
        </Nav.Item>
        <NavDropdown title={<span className="menuItem">Store</span>}>
          <NavDropdown.Item>
            <Link to="/store">
              <p className="menuItem">1</p>
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to="/store">
              <p className="menuItem">2</p>
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to="/store">
              <p className="menuItem">3</p>
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item>
            <Link to="/store">
              <p className="menuItem">4</p>
            </Link>
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </div>
  );
}

export default NavigationBar;
