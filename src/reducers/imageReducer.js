function ImageReducer(state = {images: [], saved_image: null}, action) {
  switch(action.type) {
    case 'FETCH_IMAGES':
      return {...state, images: action.payload}
    case 'POST_IMAGE':
      return {...state, saved_image: action.payload}
    case 'FAIL_POST_IMAGE':
      return {...state, saved_image: action.payload}
    default:
      return state;
  }
}

export default ImageReducer;
