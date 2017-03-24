import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from './Modal.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
    this._hideModal = this._hideModal.bind(this);
    this._showModal = this._showModal.bind(this);
  }

  _hideModal() {
    this.setState({showModal: false});
  }

  _showModal() {
    this.setState({showModal: true});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        {this.state.showModal && (
          <Modal
            hideModal={this._hideModal}
          />
        )}
        <div className="App-content">
          <h2>webkit-overflow-scrolling issues with a fixed popup</h2>
          <div>
            Open this modal using an iPhone. Initially, you should be able to scroll the list just fine. However, if you touch toward the top of the screen, hold it in place for a fraction of a second and then try to scroll the list, things freeze.
          </div>
          <div className="show-modal-link" onClick={this._showModal}>
            {'-->'} Show Modal {'<--'}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
