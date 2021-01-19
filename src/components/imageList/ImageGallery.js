import React  from 'react';
import ImageGalleryItem from '../imageItem/ImageGalleryItem';
import './ImageGallery.css';
import PropTypes from 'prop-types';


export default function ImageGallery({images, onClick,query}){
  return (
  <ul className="ImageGallery">
    {images.map((image)=>(
      <ImageGalleryItem key={image.id}
      {...image}
      onClick={onClick}/>))}
  </ul>)
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
  query:PropTypes.string
 };
