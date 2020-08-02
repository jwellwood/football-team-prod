import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Auth from './auth/Auth';
// Routes
import { visitorRoutes } from './visitor';
import { registrationRoutes } from './registration';
import { userRoutes } from './user';
import { adminRoutes } from './admin';

const Routes: React.FC = () => {
  return (
    <Switch>
      {adminRoutes.map((route) => (
        <Route
          key={route.path}
          exact
          path={route.path}
          component={Auth(route.component, true, true)}
        />
      ))}
      {userRoutes.map((route) => (
        <Route
          key={route.path}
          exact
          path={route.path}
          component={Auth(route.component, true)}
        />
      ))}

      {registrationRoutes.map((route) => (
        <Route
          key={route.path}
          exact
          path={route.path}
          component={Auth(route.component, false)}
        />
      ))}

      {visitorRoutes.map((route) => (
        <Route
          key={route.path}
          exact
          path={route.path}
          component={route.component}
        />
      ))}
    </Switch>
  );
};

export default Routes;