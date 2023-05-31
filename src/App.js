import { Component } from "react";
import Button from "./components/Button";
import Modal from "./components/Modal";
import "./styles/global.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstModalOpen: false,
      secondModalOpen: false,
    };
  }

  handleFirstModalOpen = () => {
    this.setState({ firstModalOpen: true });
  };

  handleFirstModalClose = () => {
    this.setState({ firstModalOpen: false });
  };

  handleSecondModalOpen = () => {
    this.setState({ secondModalOpen: true });
  };

  handleSecondModalClose = () => {
    this.setState({ secondModalOpen: false });
  };

  render() {
    return (
      <div className="app">
        <Button
          backgroundColor="#ffbf00"
          text="Open first modal"
          onClick={this.handleFirstModalOpen}
        />
        <Button
          backgroundColor="#00bfff"
          text="Open second modal"
          onClick={this.handleSecondModalOpen}
        />

        <Modal
          header="First Modal"
          closeButton={true}
          text="This is thefirst modal window."
          actions={
            <Button
              backgroundColor="rgb(167, 65, 47)"
              text="Close"
              onClick={this.handleFirstModalClose}
            />
          }
          isOpen={this.state.firstModalOpen}
          onRequestClose={this.handleFirstModalClose}
        />

        <Modal
          header="Do you want to delete this file?"
          closeButton={true}
          text="Once you delete this file, it won't be possible to undo this action. Are you sure you want to delete it?"
          actions={
            <>
              <Button
                backgroundColor="rgb(167, 65, 47)"
                text="Ok"
                onClick={this.handleSecondModalClose}
              />
              <Button
                backgroundColor="rgb(167, 65, 47)"
                text="Cancel"
                onClick={this.handleSecondModalClose}
              />
            </>
          }
          isOpen={this.state.secondModalOpen}
          onRequestClose={this.handleSecondModalClose}
        />
      </div>
    );
  }
}

export default App;
