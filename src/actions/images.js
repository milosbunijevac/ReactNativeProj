import axios from 'axios';

export const IMG_URL = 'https://pixabay.com/api/?key=9072083-3436ee56d3a7ce88c188d0678&';
export const GET_IMAGES = 'GET_IMAGES';
export const GET_IMAGES_FAILURE = 'GET_IMAGES_FAILURE';

export const getImages = (text) => {
  return function (dispatch) {
    
    axios.get(`${IMG_URL}q=${text}`)
      .then((response) => dispatch({
        type: GET_IMAGES,
        payload: response.data
      }));

  };
};  