import React from "react";
import myImg from "../../assets/me.jpeg"

function Home() {
  return (
    <section className="container-fluid">
      <div className="row ">
        <div className="col-sm d-flex flex-column align-items-center">
          <h1 className="homeAbout">Charles Duran</h1>
          <p>Web Developer</p>
          <img src= {myImg} alt="Charles Duran" />
        </div>
      </div>
    </section>
  );
}

export default Home;
