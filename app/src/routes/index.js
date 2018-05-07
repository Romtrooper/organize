import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from 'src/components/dashboard';
import Reminder from 'src/components/reminder';
import Home from 'src/components/home';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/dashboard" component={Dashboard} />
    <Route exact path="/reminder" component={Reminder} />
  </Switch>
);

export default Routes;
