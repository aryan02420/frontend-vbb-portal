import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  NavLink,
} from "react-router-dom";
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import Logo from '../../images/vbb-full-logo-orange.png';

const AdminSidepanel = () => {
  return (
    <nav>
      {/* <NavLink exact={true} to="/">
        <img
          alt="VBB Logo"
          src={Logo}
          height="50px"
        />
      </NavLink> */}
      <br />
      <Menu>
        <Menu.Item>
          <NavLink exact={true} activeClassName='is-active' to='/admin'>Home</NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink exact={true} activeClassName='is-active' to='/admin/library'>Library</NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink exact={true} activeClassName='is-active' to='/admin/computers'>Computers</NavLink>
        </Menu.Item>
      </Menu>
    </nav>
  )
}

export default AdminSidepanel;
