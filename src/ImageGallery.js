import React  from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import './ImageGallery.css';

export default function ImageGallery({images, onClick}){
  return (
  <ul className="ImageGallery">
    {images.map(({id,webformatURL,largeImageURL})=>(
      <ImageGalleryItem key={id} webformatURL={webformatURL}
      source = {largeImageURL}
      onClick={()=>onClick(largeImageURL)}/>))}
  </ul>)
}