import axios from 'axios';

const APIkey ='18551464-3b975953e71b3254d8a945600';

const fetchImages=(query,page=1)=>{
  return axios
  .get(`https://pixabay.com/api/?q=${query}&page=${page}&key=${APIkey}&image_type=photo&orientation=horizontal&per_page=12`)
  .then(response=>response.data.hits)
  .catch(error=> {
    throw new Error(error);
  });

};

export default {fetchImages}