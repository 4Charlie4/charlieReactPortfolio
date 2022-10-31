import React from "react";
import Navi from "../Nav";
import Nav from "react-bootstrap/Nav";

function Header() {
  return (
    <div className="container-fluid headBack pb-4 shadow">
      <header className="row pt-4">
        <Nav activeKey="/home">
          <Navi></Navi>
        </Nav>
      </header>
    </div>
  );
}

export default Header;
