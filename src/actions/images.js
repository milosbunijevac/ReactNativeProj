import axios from 'axios';

export const IMG_URL = 'https://pixabay.com/api/?key=9072083-3436ee56d3a7ce88c188d0678&';
export const GET_INITIAL_IMAGES = 'GET_IMAGES';
export const GET_MORE_IMAGES = 'GET_MORE_IMAGES';
export const GET_IMAGES_FAILURE = 'GET_IMAGES_FAILURE';

export const getInitialImages = (text) => {

  return function (dispatch) {

    axios.get(`${IMG_URL}q=${text}&page=${1}`)
      .then((response) => dispatch({
        type: GET_INITIAL_IMAGES,
        payload: response.data.hits
      }));

  };
};

export const getMoreImages = (text, page) => {
  let newPage = page + 1;
  return function (dispatch) {

    axios.get(`${IMG_URL}q=${text}&page=${newPage}`)
      .then((response) => dispatch({
        type: GET_MORE_IMAGES,
        payload: response.data.hits
      }));

  };
};