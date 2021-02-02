import React from "react";
import { Link } from "react-router-dom";
import { Nav, NavDropdown } from "react-bootstrap";

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
          {/* <NavDropdown.Item> */}
            <Link to="/books">
              <p className="submenuItem">BoA, Bk1</p>
            </Link>
          {/* </NavDropdown.Item> */}
          {/* <NavDropdown.Item> */}
            <Link to="/books">
              <p className="submenuItem">BoA, Bk2</p>
            </Link>
          {/* </NavDropdown.Item> */}
          {/* <NavDropdown.Item> */}
            <Link to="/books">
              <p className="submenuItem">BoA, Bk3</p>
            </Link>
          {/* </NavDropdown.Item> */}
          <NavDropdown.Divider />
          {/* <NavDropdown.Item> */}
            <Link to="/books">
              <p className="submenuItem">Gobs</p>
            </Link>
          {/* </NavDropdown.Item> */}
        </NavDropdown>

        <NavDropdown title={<span className="menuItem">Store</span>}>
          <NavDropdown.Item>
            <Link to="/store">
              <p className="submenuItem">BoA, Bk1</p>
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to="/store">
              <p className="submenuItem">BoA, Bk2</p>
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to="/store">
              <p className="submenuItem">BoA, Bk3</p>
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item>
            <Link to="/store">
              <p className="submenuItem">Gobs</p>
            </Link>
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
