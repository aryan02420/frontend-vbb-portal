import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import PrivateRoute from './PrivateRoute';
import Booking from '../components/Booking';
import Dashboard from '../components/Dashboard';
import MasterForm from '../components/registration/MasterForm';
import HomeSignin from '../components/HomeSignin';
import SessionDetails from '../components/SessionDetails';
import Donation from '../components/registration/Donation';
import TempRegistration from '../components/registration/TempRegistration';

const Routes = () => {

  return (
    <div className="App">
      <Switch>
        <Route exact path="/register/">
          <TempRegistration />
        </Route>
        <Route exact path="/">
          <Dashboard />
        </Route>
        <PrivateRoute exact path="/booking/">
          <Booking />
        </PrivateRoute>
        <Route exact path="/signin/" >
          <HomeSignin />
        </Route>
        <Route exact path="/signup/">
          <MasterForm />
        </Route>
        <Route exact path="/sessiondetails/:sessionid/">
          <SessionDetails />
        </Route>
        <Route exact path="/donate/">
          <Donation />
        </Route>
      </Switch>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {token: state.authToken}
}

export default connect(mapStateToProps)(Routes);
