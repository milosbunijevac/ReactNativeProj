import * as textInput from '../actions/textInput';

export default function images(state = '', action) {
  switch (action.type) {
  case textInput.GET_TEXT:
    return action.payload;  
  default:
    return state;
  }

}