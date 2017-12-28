function imageReducer(state = {images: [], saved_image: null, user_images: null, errors: null}, action) {
  switch(action.type) {
    case 'FETCH_IMAGES':
      return {...state, images: action.payload};
    case 'POST_IMAGE':
      return {...state, saved_image: true};
    case 'VOTE_IMAGE':
      const newState = state.user_images.map(image => image.id === action.payload.updatedInfo.id ? action.payload.updatedInfo : image)
      return {...state, user_images: newState};
    case 'SUCCESS_USER_IMAGES_ID':
      return {...state, user_images: action.payload.user_images};
    case 'FAILURE_USER_IMAGES_ID':
      return {...state, errors: action.payload.errors};
    case 'FETCH_USER_IMAGE':
      return {...state, images: action.payload};
    case 'SIGN_OUT':
      return {...state, user_images: null}
    default:
      return state;
  }
}

export default imageReducer;
