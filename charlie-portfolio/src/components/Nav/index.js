import React from "react";
import Nav from "react-bootstrap/Nav";

function Navi() {
  return (
    <div className= "nav col d-flex justify-content-end">
      <Nav.Item>
        <Nav.Link href="#about">About</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#projects">Projects</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#contactMe">Contact me</Nav.Link>
      </Nav.Item>
      </div>
    
  );
}

export default Navi;
