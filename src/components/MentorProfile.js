import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import { Divider, Row, Col, Input, Button } from 'antd';

import { SubmittableToggledInput } from './SubmittableToggledInput';

//need to update updateUserInfo to pass in user as a param

const MentorProfile = ({ user, setUser, updateUserInfo }) => {
  
  const onChange = (key)=>(value) => {
    console.log({value, key});
    setUser({...user, [key]: value});
  };

  const onSubmit = () => {
    updateUserInfo();
  };

  return (
    <div>
      <h1>Personal info</h1>
      {/* Remove dummy data (i.e. Jane Doe) once endpoint is up and running */}
      <Row style={{ fontWeight: 'bold' }}>First Name</Row>
      <SubmittableToggledInput onChange={onChange("firstName")} onSubmit={onSubmit} value={user.firstName} name="First Name" />
      {/* <Divider />
      <Row style={{ fontWeight: 'bold' }}>Date of birth</Row>
      <Row>
      <Col span={12}>
          {dobEdit ?
            <Input
              name='date of birth'
              value={ value }
              onChange={ handleChange }
            />
            : user.dateOfBirth || '01/01/2021'
            }
            </Col>
            {dobEdit ?
            <Col span={12}><Button type='link' onClick={ handleDobClick }>Save</Button></Col>
            :
            <Col span={12}><Button type='link' onClick={ handleDobClick }>Edit</Button></Col>
            }
      </Row>
      <Divider />
      <Row style={{ fontWeight: 'bold' }}>Timezone</Row>
      <Row>
      <Col span={12}>
        {timezoneEdit ?
          <Input
            name='timezone'
            value={ value }
            onChange={ handleChange }
          />
          : user.timezone || 'Eastern Standard Time'
          }
          </Col>
          {timezoneEdit ?
          <Col span={12}><Button type='link' onClick={ handleTimezoneClick }>Save</Button></Col>
          :
          <Col span={12}><Button type='link' onClick={ handleTimezoneClick }>Edit</Button></Col>
          }
      </Row>
      <Divider />
      <Row style={{ fontWeight: 'bold' }}>Email</Row>
      <Row>
        <Col span={12}>
        {emailEdit ?
        <Input
          name='email'
          value={ value }
          onChange={ handleChange }
        />
        : user.email || 'email@email.com'
        }
        </Col>
        {emailEdit ?
        <Col span={12}><Button type='link' onClick={ handleEmailClick }>Save</Button></Col>
        :
        <Col span={12}><Button type='link' onClick={ handleEmailClick }>Edit</Button></Col>
        }
      </Row>
      <Divider />
      <Row style={{ fontWeight: 'bold' }}>Phone</Row>
      <Row>
      <Col span={12}>
        {phoneEdit ?
        <Input
          name='phone'
          value={ value }
          onChange={ handleChange }
        />
        : user.phone || '+1 000-111-2222'
        }
        </Col>
        {phoneEdit ?
        <Col span={12}><Button type='link' onClick={ handlePhoneClick }>Save</Button></Col>
        :
        <Col span={12}><Button type='link' onClick={ handlePhoneClick }>Edit</Button></Col>
        }
      </Row>
      <Divider />
      <Row style={{ fontWeight: 'bold' }}>City</Row>
      <Row>
      <Col span={12}>
        {cityEdit ?
          <Input
            name='city'
            value={ value }
            onChange={ handleChange }
          />
          : user.city || 'New York'
          }
          </Col>
          {cityEdit ?
          <Col span={12}><Button type='link' onClick={ handleCityClick }>Save</Button></Col>
          :
          <Col span={12}><Button type='link' onClick={ handleCityClick }>Edit</Button></Col>
          }
      </Row>
      <Divider />
      <Row style={{ fontWeight: 'bold' }}>Languages</Row>
      <Row>
        <Col span={12}>
          {languagesEdit ?
            <Input
              name='languages'
              value={ value }
              onChange={ handleChange }
            />
            : user.languages || 'Spanish, English'
            }
            </Col>
            {languagesEdit ?
            <Col span={12}><Button type='link' onClick={ handleLanguagesClick }>Save</Button></Col>
            :
            <Col span={12}><Button type='link' onClick={ handleLanguagesClick }>Edit</Button></Col>
            }
      </Row>
      <Divider />
      <Row style={{ fontWeight: 'bold' }}>Password</Row>
      <Row>
        <Col span={12}>
          {passwordEdit ?
            <Input
              name='password'
              value={ value }
              onChange={ handleChange }
            />
            : '********'
            }
            </Col>
            {passwordEdit ?
            <Col span={12}><Button type='link' onClick={ handlePasswordClick }>Save</Button></Col>
            :
            <Col span={12}><Button type='link' onClick={ handlePasswordClick }>Edit</Button></Col>
            }
      </Row>
      <Divider /> */}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps, actions)(MentorProfile);
