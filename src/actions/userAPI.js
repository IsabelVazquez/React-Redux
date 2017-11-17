const API_URL = process.env.REACT_APP_API_URL;

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
      .then(window.location.href = 'http://localhost:3000');
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
      .then(window.location.href = 'http://localhost:3000');
  }
}

export default UserApi;
