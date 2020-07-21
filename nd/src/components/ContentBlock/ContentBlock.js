import React from "react";
import Aux from "../../hoc/Auxiliary";

const ContentBlock = (props) => (
  <Aux>
    <div id={props.main_id}>
      <h2 className="h2-content">{props.title}</h2>
      <a href={"#" + props.desc_id} className="lm">
        {props.button_text}
      </a>
    </div>
    <div id={props.desc_id} className="content-description">
      {props.children}
    </div>
  </Aux>
);

export default ContentBlock;
