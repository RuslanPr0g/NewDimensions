import React from "react";
import "./styles/App.css";
import logo from "./img/ND-logo.png";

function App() {
  return (
    <div className="App" id="top">
      <header>
        <div className="header-logo">
          <img src={logo} alt="ND" className="logo-img" />
          <h1>New Dimensions</h1>
        </div>
        <div className="header-right">
          <a href="#hiw">How it works</a>
          <a href="#prs">Prices</a>
          <a href="#supp">Support</a>
        </div>
      </header>
      <main>
        <div id="hiw">
          <h2>How It Works</h2>
        </div>
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default App;
