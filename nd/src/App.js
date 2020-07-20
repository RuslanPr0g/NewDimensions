import React from "react";
import "./styles/App.css";
import logo from "./img/ND-logo.png";

function App() {
  return (
    <div className="App">
      <header>
        <div className="header-logo">
          <img src={logo} alt="ND" className="logo-img" />
          <h1>New Dimensions</h1>
        </div>
        <div className="header-right">
          <a href="#">How it works</a>
          <a href="#">Prices</a>
          <a href="#">Support</a>
        </div>
      </header>
      <main>Content</main>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
