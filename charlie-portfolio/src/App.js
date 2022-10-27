import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import Projects from "./components/Project";

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <About></About>
        <Projects></Projects>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
