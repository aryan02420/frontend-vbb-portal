import { Button, Dropdown, Menu, PageHeader } from 'antd';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import { CaretDownOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

/**
 *  Top navigation bar for mentor
 * @param {Object} props.user Mentor profile information
 * @param {()=>void} props.onClose Function to toggle the left drawer for site nav
 * @returns React element
 */

const MentorHeader = ({ user, logOut, onDrawerClose }) => {

  return (
    <>
      <PageHeader
        theme="light"
        onBack={() => onDrawerClose()}
        backIcon={<MenuUnfoldOutlined />}
        title={`Hello, ${user.firstName} ${user.lastName || 'Mentor'}`}
        avatar={{
          src: 'https://picsum.photos/100',
        }}
        extra={[
          <Button key="3">Scheduler</Button>,
          <Button key="2">Calendar</Button>,
          <Dropdown
            key="more"
            overlay={
              <Menu>
                <Menu.Item>
                  <a onClick={logOut}>Logout</a>
                </Menu.Item>
              </Menu>
            }
          >
            <Button key="1" type="primary">
              <span
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {user.first_name}{' '}
                <CaretDownOutlined style={{ marginLeft: '5px' }} />
              </span>
            </Button>
          </Dropdown>,
        ]}
      />
    </>
  );
}

const mapStateToProps = (state) => {
    return {
    logOut: state.logOut,
    user: state.user
    };
  };

  export default connect(mapStateToProps, actions)(MentorHeader);