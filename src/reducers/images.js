import * as imageActions from '../actions/images';

let initialState = {
  data: [],
  page: 1
};

export default function images(state = initialState, action) {
  let newState;
  switch (action.type) {
  case imageActions.GET_INITIAL_IMAGES:
    newState = {data: action.payload, page: 1};
    console.log('Initial images reducer newState: ', newState);
    return newState;
  case imageActions.GET_MORE_IMAGES:
    newState = {data: [...state.data, ...action.payload], page: state.page + 1};
    console.log('This is newState: ', newState);
    return newState;
  default:
    return state;
  }

}