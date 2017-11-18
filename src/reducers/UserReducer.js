function UserReducer(state = {session: false,
  user: null,
  error: ""
}, action) {
    switch(action.type){
      case 'SUCCESS':
        return {...state,
            session: !!localStorage.jwt,
            user: {
              id: action.payload.id,
              email: action.payload.email,
              name: action.payload.name,
            },
          }
      case 'FAILURE':
        return {...state, error: action.payload}
      case 'SIGN_OUT':
        return {...state, session: !!localStorage.jwt, user: {}}
      default:
        return state;
    }
}

export default UserReducer;
