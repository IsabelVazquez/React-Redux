import ImageApi from './imageAPI';

export function likeImage(credentials) {
  return ImageApi.createImage(credentials)
}

export function fetchUserImages(credentials) {
  return function(dispatch) {
    return ImageApi.getImages(credentials)
      .then(response => {
        // response = {"user_images": ["HEL23h", "KLAp34", "AwOL2"]}
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
