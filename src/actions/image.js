import ImageApi from './imageAPI';

export function likeImage(credentials) {
  return function(dispatch) {
    return ImageApi.createImage(credentials)
      .then(response => {
        if(response) {
          dispatch({
            type: 'POST_IMAGE',
            // response = {saved_image: true}
            payload: response,
          })
        }
        else {
          dispatch({
            type: 'FAIL_POST_IMAGE',
            // response = {saved_image: false}
            payload: response,
          })
        }
      })
      .catch(error => {
        throw(error);
      })
  }
}
