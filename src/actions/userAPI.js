const API_URL = "https://imgurapi1.herokuapp.com/api/v1/";

class UserApi {
  static signin(credentials) {
    const request = new Request(API_URL+'signin', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({login: credentials})
    });

    return fetch(request)
      .then(response => response.json())
      .catch(error => {
        return error;
      })
  }

  static signup(credentials) {
    const request = new Request(API_URL+'users', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({user: credentials})
    });

    return fetch(request)
      .then(response => response.json())
      .catch(error => {
        return error;
      })
  }
}

export default UserApi;
