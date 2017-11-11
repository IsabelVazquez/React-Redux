// apiURL: https://api.imgur.com/endpoints/gallery#gallery
// response.json: https://api.imgur.com/models/gallery_album
const apiURL = "https://api.imgur.com/3/gallery/t/";
const CLIENT_ID = "5d47f359b245c3c";

export function fetchImages(section) {
  fetch(apiURL + section, {
    headers: {
      'Authorization': 'Client-ID ' + CLIENT_ID
    }
  })
  .then((response) => {
    return response.json()
  })
}
