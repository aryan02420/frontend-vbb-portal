import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'
import { Form, Input, Button, Row, Col } from 'antd'

const MentorProfile = ({ user, setUser, updateUserInfo }) => {
  const [editInput, setEditInput] = useState(false)

  const onChange = (key) => (evt) => {
    console.log({ value: evt.target.value, key })
    setUser({ ...user, [key]: evt.target.value })
  }

  const onSubmit = () => {
    updateUserInfo()
  }

  return (
    <div>
      <hr />
      <br />
      <div style={{ display: 'flex' }}>
        <h2 style={{ color: '#4C4C49' }}>My Info</h2>
        <Button
          type={editInput ? 'primary' : 'default'}
          htmlType="button"
          onClick={(e) => {
            setEditInput(!editInput)
            if (editInput) {
              onSubmit()
            }
            e.preventDefault()
          }}
          style={{ marginLeft: '1rem' }}
        >
          {editInput ? 'Save' : 'Edit'}
        </Button>
      </div>
      <br />
      <h3 style={{ color: '#FF914D' }}>Account-Related</h3>
      <p>
        <Row justify="left" align="left">
          <Col>
            <Form.Item label="First Name">
              <Input
                type="text"
                style={{ color: 'black' }}
                onChange={onChange('firstName')}
                value={`${user.firstName}`}
                disabled={!editInput}
                rules={[
                  {
                    required: true,
                    message: 'First Name is required.',
                  },
                ]}
              />
            </Form.Item>
            <Form.Item label="Last Name">
              <Input
                type="text"
                style={{ color: 'black' }}
                onChange={onChange('lastName')}
                value={`${user.lastName}`}
                disabled={!editInput}
                rules={[
                  {
                    required: true,
                    message: 'Last Name  is required.',
                  },
                ]}
              />
            </Form.Item>
            <Form.Item label="Email">
              <Input
                type="email"
                value={user.email}
                onChange={onChange('email')}
                style={{ color: 'black' }}
                disabled={!editInput}
                rules={[
                  {
                    required: true,
                    message: 'Email is required.',
                  },
                ]}
              />
            </Form.Item>
            <Form.Item label="Phone">
              <Input
                type="tel"
                value={user.phone}
                onChange={onChange('phone')}
                style={{ color: 'black' }}
                disabled={!editInput}
              />
            </Form.Item>
            <Form.Item label="Date of Birth">
              <Input
                type="date"
                value={user.dateOfBirth}
                onChange={onChange('dateOfBirth')}
                style={{ color: 'black' }}
                disabled={!editInput}
              />
            </Form.Item>
          </Col>
        </Row>
      </p>
      <br />
      <h3 style={{ color: '#549BEA' }}>Mentor-Related</h3>
      <p>
        <Row justify="left" align="left">
          <Col>
            <Form.Item label="My Languages">
              <Input
                type="text"
                value={user.languages}
                onChange={onChange('languages')}
                style={{ color: 'black' }}
                disabled={!editInput}
              />
            </Form.Item>
            <Form.Item label="My Time Zone">
              <Input
                type="text"
                value={user.timezone}
                onChange={onChange('timezone')}
                style={{ color: 'black' }}
                disabled={!editInput}
              />
            </Form.Item>
            <Form.Item label="My City">
              <Input
                type="text"
                value={user.city}
                onChange={onChange('city')}
                style={{ color: 'black' }}
                disabled={!editInput}
              />
            </Form.Item>
          </Col>
        </Row>
      </p>
      <br />
      <Row>
        <Col>
          <Form>
            <Form.Item label="Current Password"
              rules={[
                {
                  required: true,
                  message: 'Password is required.',
                },
                {
                  min: 8,
                  message: 'Password must atleast be 8 characters'
                },
              ]}>
              <Input.Password />
            </Form.Item>
            <Form.Item label="New Password"
              rules={[
                {
                  required: true,
                  message: 'Password is required.',
                },
                {
                  min: 8,
                  message: 'Password must atleast be 8 characters'
                },
              ]}>
              <Input.Password />
            </Form.Item>
            <Form.Item label="Confirm New Password"
              rules={[
                {
                  required: true,
                  message: 'Password is required.',
                },
                {
                  min: 8,
                  message: 'Password must atleast be 8 characters'
                },
              ]}>
              <Input.Password />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="button"
                onClick={(e) => {
                  e.preventDefault()
                }}
              >
                Change Password
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps, actions)(MentorProfile)
