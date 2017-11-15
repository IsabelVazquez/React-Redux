import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ImageListContainer from '../containers/ImageListContainer';
import SignUp from './SignUp';
import SignIn from './SignIn';
import SignOut from './SignOut';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={ImageListContainer}/>
      <Route path='/signup' component={SignUp} />
      <Route path='/signin' component={SignIn} />
      <Route path='/signout' component={SignOut} />
    </Switch>
  </main>
)

export default Main;
