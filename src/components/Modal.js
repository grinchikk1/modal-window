import { Component } from 'react';
import "../styles/modal.scss";

class Modal extends Component {
  render() {
    const { header, closeButton, text, actions, isOpen, onRequestClose } = this.props;

    if (!isOpen) {
      return null;
    }

    return (
      <div className="modal-overlay" onClick={onRequestClose}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <div className="modal-header">
            <h2>{header}</h2>
            {closeButton && (
              <button className="modal-close" onClick={onRequestClose}>
                &times;
              </button>
            )}
          </div>
          <div className="modal-content">{text}</div>
          <div className="modal-actions">{actions}</div>
        </div>
      </div>
    );
  }
}

export default Modal;
