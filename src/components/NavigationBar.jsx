import React from "react";
import { Link } from "react-router-dom";
import { Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function NavigationBar() {
  return (
    <div className="navBar">
      <Nav justify>
        <Nav.Item>
          <Link to="/">
            <p className="menuItem">Home</p>
          </Link>
        </Nav.Item>

        <NavDropdown title={<span className="menuItem">Books</span>}>
          <LinkContainer to="/books">
            <NavDropdown.Item>
              <p className="submenuItem">BoA, Bk1</p>
            </NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/books">
            <NavDropdown.Item>
              <p className="submenuItem">BoA, Bk2</p>
            </NavDropdown.Item>
          </LinkContainer>
          <LinkContainer to="/books">
            <NavDropdown.Item>
              <p className="submenuItem">BoA, Bk3</p>
            </NavDropdown.Item>
          </LinkContainer>
          <NavDropdown.Divider />
          <LinkContainer to="/books">
            <NavDropdown.Item>
              <p className="submenuItem">Gobs</p>
            </NavDropdown.Item>
          </LinkContainer>
        </NavDropdown>

        <NavDropdown title={<span className="menuItem">Store</span>}>
          <NavDropdown.Item>
            <LinkContainer to="./store">
              <p className="submenuItem">BoA, Bk1</p>
            </LinkContainer>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <LinkContainer to="./store">
              <p className="submenuItem">BoA, Bk2</p>
            </LinkContainer>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <LinkContainer to="./store">
              <p className="submenuItem">BoA, Bk3</p>
            </LinkContainer>
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item>
            <LinkContainer to="./store">
              <p className="submenuItem">Gobs</p>
            </LinkContainer>
          </NavDropdown.Item>
        </NavDropdown>

        <Nav.Item>
          <Link to="/blog">
            <p className="menuItem">Blog</p>
          </Link>
        </Nav.Item>

        <Nav.Item>
          <Link to="/about">
            <p className="menuItem">About</p>
          </Link>
        </Nav.Item>

        <Nav.Item>
          <Link to="#">
            <p className="menuItem">Contact</p>
          </Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default NavigationBar;
