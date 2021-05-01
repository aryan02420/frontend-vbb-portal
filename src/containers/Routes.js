import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import Booking from '../components/Booking';
import Dashboard from '../components/Dashboard';
import MasterForm from '../components/registration/MasterForm';
import HomeSignin from '../components/HomeSignin';
import SessionDetails from '../components/SessionDetails';
import Donation from '../components/registration/Donation';
import TempRegistration from '../components/registration/TempRegistration';

const Routes = ({token}) => {
  const isLoggedIn = true;
  return (
    <div className="App">
      <Route exact path="/register/">
        <TempRegistration />
      </Route>
      <Route exact path="/"
        render={(routerProps) =>
          isLoggedIn ? <Dashboard {...routerProps}/> : <Redirect to='/signin' />
        }
      />
      <Route exact path="/booking/">
        <Booking />
      </Route>
      <Route exact path="/signin/" render={(routerProps) =>
        <HomeSignin {...routerProps}/>
      }
      />
      <Route exact path="/signup/">
        <MasterForm />
      </Route>
      <Route exact path="/sessiondetails/:sessionid/">
        <SessionDetails />
      </Route>
      <Route exact path="/donate/">
        <Donation />
      </Route>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {token: state.authToken}
}

export default connect(mapStateToProps, null)(Routes);
