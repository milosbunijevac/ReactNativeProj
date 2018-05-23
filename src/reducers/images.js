import * as imageActions from '../actions/images';

export default function images(state = {}, action) {
  switch (action.type) {
  case imageActions.GET_IMAGES:
    return action.payload;  
  default:
    return state;
  }

}