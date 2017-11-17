import UserApi from './userAPI';

export function signUpUser(credentials) {
  return function(dispatch) {
    return UserApi.signup(credentials)
      .then(response => {
        if(response.jwt) {
          sessionStorage.setItem('jwt', response.jwt);
        }
      })
      .catch(error => {
        throw(error);
      })
  }
}
