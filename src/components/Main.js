import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ImageListContainer from '../containers/ImageListContainer';
import SignUp from '../containers/SignUp';
import SignIn from '../containers/SignIn';
import SignOut from '../containers/SignOut';

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
