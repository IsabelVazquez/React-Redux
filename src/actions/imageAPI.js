const API_URL = process.env.REACT_APP_API_URL;

class ImageApi {
  static createImage(credentials) {
    const request = new Request(API_URL+'image', {
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
