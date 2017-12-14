import ImageApi from './imageAPI';

export function likeImage(credentials) {
  ImageApi.createImage(credentials);
  return(dispatch) => {
    dispatch({ type: 'POST_IMAGE' });
  }
}

export function upvoteImage(credentials) {
  return function(dispatch) {
    return ImageApi.upvote(credentials)
      .then(response => {
        if(response.updatedInfo) {
          dispatch({
            type: 'VOTE_IMAGE',
            //{imgur_id: STR, votes: INT}
            payload: response
          });
        }
      })
      .catch(error => {
        throw(error);
      });
  }
}

export function fetchUserImages(credentials) {
  return function(dispatch) {
    return ImageApi.getImages(credentials)
      .then(response => {
        // response = {"user_images": [{}, {}, {}]}
        if(response.user_images) {
          dispatch({
            type: 'SUCCESS_USER_IMAGES_ID',
            payload: response,
          });
        }
        else {
          dispatch({
            type: 'FAILURE_USER_IMAGES_ID',
            // response = {errors: "No pictures found"}
            payload: response,
          })
        }
      })
      .catch(error => {
        throw(error);
      })
  }
}

export function fetchGalleries(section) {
  return function(dispatch) {
    return ImageApi.getGalleries(section)
      .then(response => {
        if(response.galleries) {
          dispatch({
            type: 'FETCH_IMAGES',
            payload: response.galleries,
          })
        }
      })
    .catch(error => {
      throw(error);
    });
  }
}
