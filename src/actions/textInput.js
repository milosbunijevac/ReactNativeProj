import axios from 'axios';

export const IMG_URL = 'https://pixabay.com/api/?key=9072083-3436ee56d3a7ce88c188d0678&q=nature&page=1';
export const GET_TEXT = 'GET_TEXT';

// export const getImages = () => {
//   return function (dispatch) {
//     axios.get(IMG_URL)
//       .then((response) => dispatch({
//         type: GET_IMAGES,
//         payload: response.data
//       }));
//   };
//   // return {
//   //   type: GET_IMAGES,
//   //   payload: 'This is the image payload'
//   // };
// };  

export const getText = (text) => {
  return {
    type: GET_TEXT,
    payload: text
  };
};