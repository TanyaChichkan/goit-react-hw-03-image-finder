import React, { Component,useEffect } from 'react';
import './Modal.css';
import PropTypes from 'prop-types';


// export default class Modal extends Component{


//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleKeyDown);
//   }

//   handleKeyDown = e => {
//     if (e.code === 'Escape') {
//       this.props.onClose();
//     }
//   };

//   handleClick=e=>{
//     e.target.className==="Overlay" && this.props.onClose();
//   }

//   render(){
//     return (
//       <div className="Overlay" onClick={this.handleClick}>
//         <div className="Modal">
//           {this.props.children}
//         </div>
//       </div>
//     )
//   };

// }


const Modal=({onClose,children})=>{

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  useEffect(()=>{
    window.addEventListener('keydown', handleKeyDown);

    return function() {
      window.removeEventListener('keydown', handleKeyDown);
    }

  },)

  const handleClick=e=>{
    e.target.className==="Overlay" && onClose();
  }

    return (
      <div className="Overlay" onClick={handleClick}>
        <div className="Modal">
          {children}
        </div>
      </div>
    )

};

export default Modal;

Modal.propTypes = {
  onClose:PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};