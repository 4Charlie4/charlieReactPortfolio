import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import Projects from "./components/Project";
import "./App.scss";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <Routes>
          <Route path="/" element={<About></About>} />
        </Routes>
        <Projects></Projects>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
