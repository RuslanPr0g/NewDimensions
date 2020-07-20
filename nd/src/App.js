import React from "react";
import "./styles/App.css";
import logo from "./img/ND-logo.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="ND" className="logo-img" />
        <h1>New Dimensions</h1>
      </header>
    </div>
  );
}

export default App;
