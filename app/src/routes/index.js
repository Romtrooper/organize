import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from 'src/components/dashboard';
import Home from 'src/components/home';
import Login from 'src/containers/LoginContainer';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/dashboard" component={Dashboard} />
    <Route exact path="/login" component={Login} />
  </Switch>
);

export default Routes;
