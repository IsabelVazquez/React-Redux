const apiURL = "https://api.imgur.com/3/";
const CLIENT_ID = "d2191d869f130f4";

export function fetchImages(section) {
  return (dispatch) => {
    fetch(apiURL + "gallery/t/" + section, {
      headers: {
        'Authorization': 'Client-ID ' + CLIENT_ID
      }
    })
    .then((response) => response.json())
    .then(json => dispatch({
      type: 'FETCH_IMAGES',
      payload: json.data,
    }))
    .catch(error => {
      throw(error);
    });
  }
}

export function fetchImage(id) {
  return (dispatch) => {
    fetch(apiURL + "image/t/" +id, {
      headers: {
        'Authorization': 'Client-ID ' + CLIENT_ID
      }
    })
    .then((response) => response.json())
    .then(json => dispatch({
      type: 'FETCH_USER_IMAGE',
      payload: json.data,
    }))
    .catch(error => {
      throw(error);
    });
  }
}
