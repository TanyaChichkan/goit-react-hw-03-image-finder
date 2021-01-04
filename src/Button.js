import React from 'react';
import './Button.css';
import PropTypes from 'prop-types';

export default function Button({onClick}){
  return (
  <button type="button" onClick={onClick} className="Button">Load more</button>
  )
}

Button.propTypes = {
  onClick:PropTypes.func.isRequired
};