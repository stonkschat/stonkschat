/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import Home from 'src/pages/Home/';
import Login from 'src/pages/Login/';
import ErrorPage from 'src/pages/Error/';
import { CommentsGridPage } from './CommentsGridPage';

const Routes = () => (
  <Switch>
    <Route exact={true} path="/" render={(props) => <CommentsGridPage {...props} />} />
    <Route exact={true} path="/login" render={(props) => <Login {...props} />} />
    <Route path="*">
      <ErrorPage />
    </Route>
  </Switch>
);

export default Routes;
