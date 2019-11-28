import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';

import SignIn from '../screens/Auth/SignIn';
import Client from '../screens/Client';
import ClientForm from '../screens/Client/Form';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/" component={Client} />
        <PrivateRoute path="/cadastrar" component={ClientForm} />
        <PrivateRoute path="/editar/:id" component={ClientForm} />

        <Route path="/entrar" component={SignIn} />
      </Switch>
    </Router>
  );
}
