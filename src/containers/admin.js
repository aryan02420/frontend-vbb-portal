import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import { Layout, Drawer } from 'antd';

import AdminSidepanel from '../components/adminComponents/AdminSidepanel';
import Library from '../components/adminComponents/Library';
import Computer from '../components/adminComponents/Computer';


const Admin = ( {user} ) => {

  return (
    <div  style={{
      display: 'flex',
      alignItems: 'stretch'
    }}>
      <AdminSidepanel />
        <main style={{
          padding: '2rem'
        }}>
        <h1>Site Administration</h1>
        <Switch>
          <Route exact path="/admin/"/>
          <Route path="/admin/library/" render={Library}/>
          <Route path="/admin/computers/" render={Computer}/>
        </Switch>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps, actions)(Admin);