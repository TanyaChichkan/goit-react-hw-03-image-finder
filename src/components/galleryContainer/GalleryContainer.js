import React, {Component,useState,useEffect} from 'react';

import ImageGallery from '../imageList/ImageGallery';
import SearchBar from '../searchBar/SearchBar';
import Spinner from '../spinner/Spinner';
import Modal from '../modal/Modal.js';
import Button from '../button/Button.js';
import Notification from '../notification/Notification';

import imagesAPI from '../../services/imagesAPI';

// export default class GalleryContainer extends Component{

//   state={
//     images:[],
//     query:"",
//     page: 1,
//     loading: false,
//     largeImageUrl: null,
//     err: null,
//     fail: null
//   }

//   componentDidUpdate(prevProps, prevState){
//     const prevQuery = prevState.query;
//     const nextQuery = this.state.query;

//     const prevImgArr = prevState.images;
//     const currentImgArr = this.state.images;

//     if(prevQuery !== nextQuery) this.fetchImages(nextQuery);

//     if(prevImgArr.length < currentImgArr.length) {
//       const newHeight = document.documentElement.scrollHeight-1024;

//       window.scrollTo({
//         top: newHeight,
//         behavior: 'smooth',
//       });
//     }
//   };

//   getLargeURL = url=>{
//     this.setState({largeImageUrl:url})
//   };

//   closeModal =()=>{
//     this.setState({largeImageUrl:null})
//   }

//   fetchImages=()=>{
//     const {query,page} = this.state;

//     this.setState({loading: true});

//     imagesAPI.fetchImages(query,page)
//     .then(images => {
//       images.length>0 ?
//       (this.setState(prevState=>(
//         {images: [...prevState.images,...images],
//         page: prevState.page+1})))
//         :
//         (this.setState({fail:true}))
//       ;
//     })
//     .catch(err=>this.setState({err}))
//     .finally(()=>this.setState({loading:false}))
//   };

//   handleFormSubmit=text=>{
//     this.setState({query:text, images:[],page:1})
//   };

//   changeFailStatus=value=>{
//     this.setState({fail:value})
//   }

//   render(){
//     const {query,images,loading, largeImageUrl,err,fail} = this.state;
//     return (
//       <div>
//         <SearchBar onSubmit = {this.handleFormSubmit}/>

//         {(err || fail) && (<Notification text='Something went wrong. Please, try with another query!!!' openNotif={this.changeFailStatus}/>)}

//         {images.length > 0 && (<ImageGallery images={images} alt={query} onClick={this.getLargeURL}/>)}

//         {loading && <Spinner/>}

//         {images.length >0 && (
//           <Button loadMoreClick={this.fetchImages}/>
//         )}

//         {largeImageUrl && (
//           <Modal onClose={this.closeModal}>
//             <img src={largeImageUrl} alt="large"/>
//           </Modal>)}

//       </div>
//     )
//   }
// };

const initialState={
  images:[],
  query:"",
  page: 1,
  loading: false,
  largeImageUrl: null,
  err: null,
  fail: null
}

const GalleryContainer=()=>{

  const[state,setState] = useState({...initialState});

  useEffect(()=>{
    const newHeight = document.documentElement.scrollHeight-1024;

    window.scrollTo({
      top: newHeight,
      behavior: 'smooth',
    });
  },[state.images.length]);

  const fetchImages=()=>{
    const {query,page} = state;

    setState(prev=>({...prev,loading: true}));

    imagesAPI.fetchImages(query,page)
    .then(files => {

      files.length >0 ?

      (setState(prevState=>(
        {...prevState, images: [...prevState.images, ...files],
        page: prevState.page+1})))
        :
        (setState(prev=>({...prev,err:'Something went wrong'})));
    })
    .catch(err=>{
      setState(prev=>({...prev,err:err.message}))
    })
    .finally(()=>setState(prev=>({...prev,loading:false})))
  };

  const handleSearchChange=(e)=>{
    setState(prev=>({...prev,query: e.target.value, images:[]}))
  }

  const openNotif=(value)=>{
    setState(prev=>({...prev, err:value}))
  }

  const getLargeURL = url=>{
    setState(prev=>({...prev,largeImageUrl:url}))
  };

  const closeModal =()=>{
    setState(prev=>({...prev,largeImageUrl:null}))
  }

  const handleFormSubmit=e=>{
    e.preventDefault();
    fetchImages();
  };

    const {query,images,loading, largeImageUrl,err} = state;

    return (
      <div>
        <SearchBar onSubmit = {handleFormSubmit} onChange={handleSearchChange} query={state.query}/>

        {err && (<Notification text={state.err} openNotif={openNotif}/>)}

        {images.length > 0 && (<ImageGallery images={images} alt={query} onClick={getLargeURL}/>)}

        {loading && <Spinner/>}

        {images.length >0 && (
          <Button loadMoreClick={fetchImages}/>
        )}

        {largeImageUrl && (
          <Modal onClose={closeModal}>
            <img src={largeImageUrl} alt="large"/>
          </Modal>)}

      </div>
    )

};

export default GalleryContainer;


