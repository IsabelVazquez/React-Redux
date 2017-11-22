import UserApi from './userAPI';

export function signUpUser(credentials, history, redirect) {
  return function(dispatch) {
    return UserApi.signup(credentials)
      .then(response => {
        if(response.jwt) {
          localStorage.setItem("jwt", response.jwt);
          localStorage.setItem("user", JSON.stringify({
            id: response.id, email: response.email, name: response.name,
          }));
          history.push(redirect)
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
            payload: response.error,
            //this.props.user.error
          })
        }
      })
      .catch(error => {
        throw(error);
      })
  }
}

export function loginUser(credentials, history, redirect) {
  return function(dispatch) {
    return UserApi.signin(credentials)
      .then(response => {
        if(response.jwt) {
          localStorage.setItem("jwt", response.jwt);
          localStorage.setItem("user", JSON.stringify({
            id: response.id, email: response.email, name: response.name,
          }));
          history.push(redirect)
          dispatch({
            type: 'SUCCESS',
            // response = {jwt: KEY, id: INT, email: STR, name: STR}
            payload: response,
          })
        }
        else {
          dispatch({
            type: 'FAILURE',
            //response = {"error":"Invalid username or password"}
            payload: response.errors,
            //this.props.user.error
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
