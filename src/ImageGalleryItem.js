import React  from 'react';
import './ImageItem.css';

export default function ImageGalleryItem({id,webformatURL,largeImageURL,onClick}){
  return (
  <li className="ImageGalleryItem" key={id}>
    <img src={webformatURL} alt="Picutre from API"
    className="ImageGalleryItem-image"
    source = {largeImageURL}
    onClick={onClick}
    width="300" />
  </li> )
}