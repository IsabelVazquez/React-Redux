import { combineReducers } from 'redux';
import imageReducer from './imageReducer';
import UserReducer from './UserReducer';

export default combineReducers({
 images: imageReducer,
 user: UserReducer,
});
