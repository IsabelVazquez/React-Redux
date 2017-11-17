import { combineReducers } from 'redux';
import ImageReducer from './ImageReducer';
import UserReducer from './UserReducer';

export default combineReducers({
 images: ImageReducer,
 user: UserReducer,
});
