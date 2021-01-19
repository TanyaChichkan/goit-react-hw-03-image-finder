import React from 'react';
import './Button.css';
import PropTypes from 'prop-types';

export default function Button({loadMoreClick}){
  return (
  <button type="button" onClick={loadMoreClick} className="Button">Load more</button>
  )
}

Button.propTypes = {
  onClick:PropTypes.func
};