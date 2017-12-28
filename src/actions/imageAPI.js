const API_URL = "http://imgurapi1.herokuapp.com/api/v1/";

class ImageApi {
  static createImage(credentials) {
    const request = new Request(API_URL+'like', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({image: credentials})
    });

    return fetch(request)
      .then(response => response.json())
      .catch(error => {
        return error;
      })
  }

  static getImages(credentials) {
    const request = new Request(API_URL+'images', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({image: credentials})
    });
    return fetch(request)
      .then(response => response.json())
      .catch(error => {
        return error;
      })
  }

  static getGalleries(credentials) {
    const request = new Request(API_URL+`galleries?section=${credentials.section}`, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
    });
    return fetch(request)
      .then(response => response.json())
      .catch(error => {
        return error;
      })
  }

  static upvote(credentials) {
    const request = new Request(API_URL+'votes', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({image: credentials})
    });
    return fetch(request)
      .then(response => response.json())
      .catch(error => {
        return error;
      })
  }
}

export default ImageApi;
