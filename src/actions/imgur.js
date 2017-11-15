const apiURL = "https://api.imgur.com/3/gallery/t/";
const CLIENT_ID = "5d47f359b245c3c";

export function fetchImages(section) {
  return (dispatch) => {
    fetch(apiURL + section, {
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
