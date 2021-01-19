import React, {Component,useState}  from 'react';
import './ImageItem.css';
import PropTypes from 'prop-types';


// class ImageGalleryItem extends Component{

//   handleClick=e=>{
//     this.props.onClick(e.target.dataset.source);
//   }

//   render(){
//     const {id,webformatURL,query,largeImageURL} = this.props;
//   return (
//   <li className="ImageGalleryItem" key={id}>
//     <img src={webformatURL} alt={query}
//     className="ImageGalleryItem-image"
//     onClick={this.handleClick}
//     data-source = {largeImageURL}
//     width="300" />
//   </li> )
//   }
// };

const ImageGalleryItem = ({id,webformatURL,query,largeImageURL,onClick})=>{

  const handleClick=e=>{
    onClick(e.target.dataset.source);
  }
    return (
    <li className="ImageGalleryItem" key={id}>
    <img src={webformatURL} alt={query}
    className="ImageGalleryItem-image"
    onClick={handleClick}
    data-source = {largeImageURL}
    width="300" />
  </li> )
}

ImageGalleryItem.propTypes = {
  id: PropTypes.number,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string,
  query:PropTypes.string,
  onClick:PropTypes.func.isRequired
};

export default ImageGalleryItem;