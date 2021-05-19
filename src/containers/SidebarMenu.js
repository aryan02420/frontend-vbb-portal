import {
    BookOutlined,
    CalendarOutlined,
    FormOutlined,
    HomeOutlined,
    LogoutOutlined,
    UnorderedListOutlined,
    UserOutlined,
  } from '@ant-design/icons';
  import { Avatar, Menu } from 'antd';
  import React from 'react';
  import { Link, NavLink } from 'react-router-dom';

  function SidebarMenu({ user }) {
    return (
      <>
        <Menu mode="inline" defaultSelectedKeys={['1']}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '2rem 1rem',
            }}
          >
            <Avatar style={{ color: '#FF914D' }} icon={<UserOutlined />} />
            <div style={{ fontSize: '.75rem', padding: '1rem' }}>
              { user.first_name, user.last_name || 'Mentor'}
            </div>
          </div>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <NavLink to="/">Home</NavLink>
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            <NavLink to="/">Profile</NavLink>
          </Menu.Item>
          <Menu.Item key="3" icon={<CalendarOutlined />}>
            <NavLink to="/">Mentee List</NavLink>
          </Menu.Item>
          <Menu.Item key="6" icon={<FormOutlined />}>
            <NavLink to="/">Student Registration</NavLink>
          </Menu.Item>
          <Menu.Item key="8" icon={<LogoutOutlined />}>
            <Link to="/">Logout</Link>
          </Menu.Item>
        </Menu>
        <div>
          <img
            style={{ padding: '2rem 1rem' }}
            src="/images/vbb-full-logo.png"
            alt="VBB logo"
            width="150"
          />
        </div>
      </>
    );
  }

  export default SidebarMenu;