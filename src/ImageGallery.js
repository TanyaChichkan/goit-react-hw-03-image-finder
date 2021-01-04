import React  from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import './ImageGallery.css';
import PropTypes from 'prop-types';


export default function ImageGallery({images, onClick}){
  return (
  <ul className="ImageGallery">
    {images.map(({id,webformatURL,largeImageURL})=>(
      <ImageGalleryItem key={id} webformatURL={webformatURL}
      source = {largeImageURL}
      onClick={()=>onClick(largeImageURL)}/>))}
  </ul>)
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.exact({
     id:PropTypes.string,
     webformatURL: PropTypes.string.isRequired,
     largeImageURL: PropTypes.string.isRequired
  }),).isRequired,
  onClick: PropTypes.func.isRequired,
 };
