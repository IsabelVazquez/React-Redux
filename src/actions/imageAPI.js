const API_URL = process.env.REACT_APP_API_URL;

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
    const request = new Request(API_URL+'galleries', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({gallery: credentials})
    });
    return fetch(request)
      .then(response => response.json())
      .catch(error => {
        return error;
      })
  }
}

export default ImageApi;
