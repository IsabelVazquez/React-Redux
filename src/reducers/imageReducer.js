function ImageReducer(state = {images: [], saved_image: null, user_images: null, errors: null}, action) {
  switch(action.type) {
    case 'FETCH_IMAGES':
      return {...state, images: action.payload}
    case 'POST_IMAGE':
      return {...state, saved_image: action.payload}
    case 'FAIL_POST_IMAGE':
      return {...state, saved_image: action.payload}
    case 'SUCCESS_USER_IMAGES_ID':
      return {...state, user_images: action.payload.user_images}
    case 'FAILURE_USER_IMAGES_ID':
      return {...state, errors: action.payload.errors}
      case 'FAILURE_USER_IMAGE':
        return {...state, user_images: action.payload}
    default:
      return state;
  }
}

export default ImageReducer;
