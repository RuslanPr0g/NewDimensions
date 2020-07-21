import React from "react";
import Aux from "../../hoc/Auxiliary";

const Footer = () => (
  <Aux>
    <div className="main">
      <div className="info">
        <h2 className="cwu">New Dimensions contact with us:</h2>
        <p className="phone">+40992121999</p>
        <p className="email">thend@ggmail.com</p>
      </div>
    </div>
    <div className="extra">
      <div className="github">
        <p>
          Also Check Out creator's{" "}
          <a
            href="https://github.com/RuslanPr0g/NewDimensions"
            target="_blank"
            id="gh"
            rel="noopener noreferrer"
          >
            github
          </a>
        </p>
      </div>
    </div>
  </Aux>
);

export default Footer;
