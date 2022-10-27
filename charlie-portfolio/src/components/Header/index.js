import React from "react";
import Navi from "../Nav";
import Nav from "react-bootstrap/Nav";

function Header() {
  return (
    <div className="container-fluid headBack pb-4 shadow">
      <header className="row pt-4">
        <Nav
          activeKey="/home"
          onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
          <Nav.Item>
            <Nav.Link href="/" className="head">Charles Duran</Nav.Link>
          </Nav.Item>
          <Navi></Navi>
        </Nav>
      </header>
    </div>
  );
}

export default Header;
