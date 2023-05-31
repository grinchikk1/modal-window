import { Component } from "react";
import "../styles/button.scss";

class Button extends Component {
  render() {
    const { backgroundColor, text, onClick } = this.props;
    return (
      <button className="button" style={{ backgroundColor }} onClick={onClick}>
        {text}
      </button>
    );
  }
}

export default Button;
