import React from "react";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";

function Navi() {
  return (
    <div className="nav col-sm d-flex justify-content-evenly ">
      <Nav.Item>
        <LinkContainer to="/about">
          <Nav.Link className="navItems">About</Nav.Link>
        </LinkContainer>
      </Nav.Item>

      <Nav.Item>
        <LinkContainer to="/projects">
          <Nav.Link className="navItems">Projects</Nav.Link>
        </LinkContainer>
      </Nav.Item>

      <Nav.Item>
        <LinkContainer to="/">
          <Nav.Link className="navItems">Home</Nav.Link>
        </LinkContainer>
      </Nav.Item>

      <Nav.Item>
        <LinkContainer to="/contact">
          <Nav.Link className="navItems">Contact me</Nav.Link>
        </LinkContainer>
      </Nav.Item>
    </div>
  );
}

export default Navi;
