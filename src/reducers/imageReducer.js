function ImageReducer(state = {}, action) {
  switch(action.type){
    case 'FETCH_IMAGES':
      return {...state, images: action.payload}
    default:
      return state;
  }
}

export default ImageReducer;
