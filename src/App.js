import React, {Component} from 'react';
import ImageGallery from './ImageGallery';
import SearchBar from './SearchBar';
import Spinner from './Spinner';
import Modal from './Modal.js';
import Button from './Button.js';

import './App.css';

const APIkey ='18551464-3b975953e71b3254d8a945600';

export default class App extends Component{

  state={
    images:[],
    query:"",
    page: 1,
    loading: false,
    largeImageUrl: null
  }

  componentDidUpdate(prevProps, prevState){
    const prevQuery = prevState.query;
    const nextQuery = this.state.query;

    const preImgArr = prevState.images;
    const currentImgArr = this.state.images;

    if(prevQuery !== nextQuery) this.fetchImages(nextQuery);

    if(preImgArr.length < currentImgArr.length) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  };

  getLargeURL = url=>{
    console.log('yes');
    this.setState({largeImageUrl:url})
  };

  closeModal =()=>{
    this.setState({largeImageUrl:null})
  }

  fetchImages=()=>{
    const {query,page} = this.state;

    this.setState({loading: true});

    fetch(`https://pixabay.com/api/?q=${query}&page=${page}&key=${APIkey}&image_type=photo&orientation=horizontal&per_page=12`)
    .then(response=>response.json())
    .then(data=>data.hits)
    .then(images => {
      this.setState(prevState=>({images: [...prevState.images,...images],
        page: prevState.page+1}));
    })
    .catch(err=>console.log(err))
    .finally(()=>this.setState({loading:false}))
  };

  handleFormSubmit=text=>{
    this.setState({query:text, images:[],page:1})
  };

  render(){
    const {images,loading, largeImageUrl} = this.state;
    return (
      <div>
        <SearchBar onSubmit = {this.handleFormSubmit}/>

        {images.length > 0 && (<ImageGallery images={images} onClick={this.getLargeURL}/>)}

        {loading && <Spinner/>}

        {images.length >0 && (
          <Button onClick={this.fetchImages}/>
        )}

        {largeImageUrl && (
          <Modal onClose={this.closeModal}>
            <img src={largeImageUrl} alt="large"/>
          </Modal>)}

      </div>
    )
  }
}


