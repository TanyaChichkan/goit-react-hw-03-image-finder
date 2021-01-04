import React from 'react';
import './Button.css';

export default function Button({onClick}){
  return (
  <button type="button" onClick={onClick} className="Button">Load more</button>
  )
}