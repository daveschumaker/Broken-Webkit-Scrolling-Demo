import React, { Component } from 'react';
import './Modal.css';

class Modal extends Component {
  render() {
    const rows = [];

    let index = 1;
    while (index < 250) {
      rows.push(<p key={index}>CONTENT {index}</p>)
      index++
    }

    return (
      <div className="Modal">
        <div onClick={this.props.hideModal}>
          [X CLOSE]
        </div>
        {rows}
      </div>
    );
  }
}

export default Modal;
