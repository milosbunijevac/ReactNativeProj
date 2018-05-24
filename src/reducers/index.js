import { combineReducers } from 'redux';
import Images from './images';
import TextInput from './textInput';

export default combineReducers({
  Images: Images,
  TextInput: TextInput
});