import UserApi from './userAPI';

export function signUpUser(credentials) {
  return function(dispatch) {
    return UserApi.signup(credentials)
      .then(response => {
        if(response.jwt) {
          localStorage.setItem("jwt", response.jwt);
          localStorage.setItem("user", JSON.stringify({
            id: response.id, email: response.email, name: response.name,
          }));
          dispatch({
            type: 'SUCCESS',
            // response = {jwt: KEY, id: INT, email: STR, name: STR}
            payload: response,
          })
        }
        else {
          dispatch({
            type: 'FAILURE',
            // response = {"error":"Email has already been taken"}
            payload: response,
          })
        }
      })
      .catch(error => {
        throw(error);
      })
  }
}

export function loginUser(credentials) {
  return function(dispatch) {
    return UserApi.signin(credentials)
      .then(response => {
        if(response.jwt) {
          localStorage.setItem("jwt", response.jwt);
          localStorage.setItem("user", JSON.stringify({
            id: response.id, email: response.email, name: response.name,
          }));
          dispatch({
            type: 'SUCCESS',
            // response = {jwt: KEY, id: INT, email: STR, name: STR}
            payload: response,
          })
        }
        else {
          dispatch({
            type: 'FAILURE',
            //response = {"errors":"Invalid username or password"}
            payload: response,
          })
        }
      })
      .catch(error => {
        throw(error);
      })
  }
}

export function signOutUser() {
  localStorage.removeItem("jwt");
  localStorage.removeItem("user");
  return(dispatch) => {
    dispatch({ type: 'SIGN_OUT' });
  }
}
