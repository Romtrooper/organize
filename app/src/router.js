import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from 'src/components/pages/dashboard/Dashboard';
import Home from 'src/components/pages/home/Home';
import Login from 'src/components/pages/login/LoginContainer';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/dashboard" component={Dashboard} />
    <Route exact path="/login" component={Login} />
  </Switch>
);

export default Routes;
