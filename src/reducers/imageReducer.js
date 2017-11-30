function ImageReducer(state = {images: [], saved_image: null, user_images: null, errors: null}, action) {
  switch(action.type) {
    case 'FETCH_IMAGES':
      return {...state, images: action.payload};
    case 'POST_IMAGE':
      return {...state, saved_image: true};
    case 'VOTE_IMAGE':
      const upvotedImage = state.user_images.find(x => x.id === action.payload.imgur_id)
      upvotedImage.upvotes = action.payload.votes
      return {...state};
    case 'SUCCESS_USER_IMAGES_ID':
      return {...state, user_images: action.payload.user_images};
    case 'FAILURE_USER_IMAGES_ID':
      return {...state, errors: action.payload.errors};
    case 'FETCH_USER_IMAGE':
      return {...state, images: action.payload};
    default:
      return state;
  }
}

export default ImageReducer;
