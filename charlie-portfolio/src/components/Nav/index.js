import React from "react";
import Nav from "react-bootstrap/Nav";

function Navi() {
  return (
    <div className="nav col d-flex justify-content-evenly ">
      <Nav.Item>
        <Nav.Link href="#about" className="navItems ">
          About
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#projects" className="navItems">
          Projects
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#contactMe" className="navItems">
          Contact me
        </Nav.Link>
      </Nav.Item>
    </div>
  );
}

export default Navi;
