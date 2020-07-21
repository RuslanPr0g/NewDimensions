import React from "react";
import Aux from "../../hoc/Auxiliary";

const PriceBlock = (props) => (
  <Aux>
    <div className={props.col_style}>
      <div className={props.topl_style}>{props.top_title}</div>
      <div className="price-column-amount">{props.amount}</div>
      <div className="price-column-decription">{props.children}</div>
      <div className="price-column-bottom">
        <button>{props.btn_text}</button>
      </div>
    </div>
  </Aux>
);

export default PriceBlock;
