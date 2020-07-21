import React from "react";
import Aux from "../../hoc/Auxiliary";

import Header from "./header";
import Footer from "./footer";

const layout = (props) => (
  <Aux>
    <header>
      <Header></Header>
    </header>
    <main>{props.children}</main>
    <footer id="supp">
      <Footer></Footer>
    </footer>
  </Aux>
);

export default layout;
