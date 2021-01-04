import React, { Component } from 'react';
import './Modal.css';
import PropTypes from 'prop-types';


export default class Modal extends Component{

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  render(){
    return (
      <div className="Overlay">
        <div className="Modal">
          {this.props.children}
        </div>
      </div>
    )
  };

}

Modal.propTypes = {
  onClose:PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};