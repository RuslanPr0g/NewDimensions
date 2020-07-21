import React from "react";
import Aux from "../../hoc/Auxiliary";

class ContentBlock extends React.Component {
  constructor(props) {
    super(props);
    this.showHangle = this.showHangle.bind(this);
    this.state = {
      show: false,
      main_id: props.main_id,
      title: props.title,
      desc_id: props.desc_id,
      button_text: props.button_text,
      children: props.children,
    };
  }

  showHangle() {
    this.setState({ show: !this.state.show });
  }

  render() {
    let _desc;

    if (this.state.show == true) {
      _desc = (
        <div id={this.state.desc_id} className="content-description">
          {this.state.children}
        </div>
      );
    } else {
      _desc = "";
    }
    return (
      <Aux>
        <div id={this.state.main_id}>
          <h2 className="h2-content">{this.state.title}</h2>
          <a
            href={"#" + this.state.desc_id}
            className="lm"
            onClick={this.showHangle}
          >
            {this.state.button_text}
          </a>
        </div>
        {_desc}
      </Aux>
    );
  }
}

export default ContentBlock;
