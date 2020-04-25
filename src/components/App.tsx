import * as React from 'react';
import { Fragment } from 'react';
import NavBar from './coreComponents/NavBar';
import { Switch, Route } from 'react-router-dom';
import MainPage from './main/MainPage';
import NotFound from './coreComponents/NotFound';
import LoginPage from './login/LoginPage';
import ProfilePage from './profile/ProfilePage';

export interface IAppProps {
}

export default class App extends React.Component<IAppProps> {
  public render() {
    return (
      <Fragment>
        <NavBar />
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/profile/:id' component={ProfilePage} />
          <Route component={NotFound} />
        </Switch>
      </Fragment>
    );
  }
}
