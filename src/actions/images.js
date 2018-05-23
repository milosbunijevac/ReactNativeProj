import axios from 'axios';

export const IMG_URL = 'https://pixabay.com/api/?key=9072083-3436ee56d3a7ce88c188d0678&q=nature';
export const GET_IMAGES = 'GET_IMAGES';
export const GET_IMAGES_FAILURE = 'GET_IMAGES_FAILURE';

export const getImages = () => {
  return function (dispatch) {
    axios.get(IMG_URL)
      .then((response) => dispatch({
        type: GET_IMAGES,
        payload: response.data
      }));

        
  };
  // return {
  //   type: GET_IMAGES,
  //   payload: 'This is the image payload'
  // };
};  