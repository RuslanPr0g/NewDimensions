import React from "react";
import Aux from "../../hoc/Auxiliary";

import logo from "../../img/ND-logo.png";

const Header = () => (
  <Aux>
    <div className="header-logo">
      <img src={logo} alt="ND" className="logo-img" />
      <h1>New Dimensions</h1>
    </div>
    <div className="header-right">
      <a href="#hiw">How it works</a>
      <a href="#prs">Prices</a>
      <a href="#supp">Support</a>
    </div>
  </Aux>
);

export default Header;
