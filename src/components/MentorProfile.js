import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'
import { Form, Input, Button, Row, Col } from 'antd'
import {
  UserOutlined,
  LockOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from '@ant-design/icons'

function MentorProfile({ user }) {
  // email: "testMentor@test.com"
  // external_id: "db6e2abe-91b8-4180-bf9c-d518766669ef"
  // first_name: "MentorFirstName"
  // id: "db6e2abe-91b8-4180-bf9c-d518766669ef"
  // last_name: "MentorLastName"
  // user_type: "MENTOR"

  console.log(user)

  return (
    <div>
      <div>
        <hr />
        <br />
        <h2 style={{ color: '#4C4C49' }}>My Info</h2>
        <br />
        <h3 style={{ color: '#FF914D' }}>Account-Related</h3>
        <p>
          <Row justify="left" align="left">
            <Col span={12} style={{}}>
              <Form.Item label="Name">
                <Input
                  type="text"
                  style={{ color: 'black' }}
                  value={`${user.firstName} ${user.lastName}`}
                  disabled="true"
                />
              </Form.Item>
              <Form.Item label="Email">
                <Input
                  type="text"
                  value={user.email}
                  style={{ color: 'black' }}
                  disabled="true"
                />
              </Form.Item>
              <Form.Item label="Phone">
                <Input
                  type="text"
                  value={user.phone}
                  style={{ color: 'black' }}
                  disabled="true"
                />
              </Form.Item>
              <br />
              <Form.Item label="Current Password">
                <Input.Password />
              </Form.Item>
              <Form.Item label="New Password">
                <Input.Password />
              </Form.Item>
              <Form.Item label="Confirm New Password">
                <Input.Password />
              </Form.Item>
              <Button
                type="primary"
                htmlType="button"
                onClick={(e) => {
                  e.preventDefault()
                }}
              >
                Change Password
              </Button>
            </Col>
          </Row>
        </p>
        <br />
        <h3 style={{ color: '#549BEA' }}>Mentor-Related</h3>
        <p>
          <Row justify="left" align="left">
            <Col span={12} style={{}}>
              <Form.Item label="My Languages">
                <Input
                  type="text"
                  value="English"
                  style={{ color: 'black' }}
                  disabled="true"
                />
              </Form.Item>
              <Form.Item label="My Time Zone">
                <Input
                  type="text"
                  value="ET"
                  style={{ color: 'black' }}
                  disabled="true"
                />
              </Form.Item>
            </Col>
          </Row>
        </p>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps, actions)(MentorProfile)
