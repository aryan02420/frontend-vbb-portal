import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import { Divider, Row, Col, Input, Button } from 'antd';

const MentorProfile = ({ user, updateUser }) => {
  const [nameEdit, setNameEdit] = useState(false);
  const [dobEdit, setDobEdit] = useState(false);
  const [timezoneEdit, setTimezoneEdit] = useState(false);
  const [emailEdit, setEmailEdit] = useState(false);
  const [phoneEdit, setPhoneEdit] = useState(false);
  const [cityEdit, setCityEdit] = useState(false);
  const [languagesEdit, setLanguagesEdit] = useState(false);
  const [passwordEdit, setPasswordEdit] = useState(false);

  //TODO: Delete the below useState hook once the /mentor endpoint is up and running
  const [value, setValue] = useState('');

  function handleNameClick(e) {
    if(nameEdit === false) {
      setNameEdit(true);
    } else {
      setNameEdit(false);
    }
  }

  function handleDobClick(e) {
    if(dobEdit === false) {
      setDobEdit(true);
    } else {
      setDobEdit(false);
    }
  }

  function handleTimezoneClick(e) {
    if(timezoneEdit === false) {
      setTimezoneEdit(true);
    } else {
      setTimezoneEdit(false);
    }
  }

  function handleEmailClick(e) {
    if(emailEdit === false) {
      setEmailEdit(true);
    } else {
      setEmailEdit(false);
    }
  }

  function handlePhoneClick(e) {
    if(phoneEdit === false) {
      setPhoneEdit(true);
    } else {
      setPhoneEdit(false);
    }
  }

  function handleCityClick(e) {
    if(cityEdit === false) {
      setCityEdit(true);
    } else {
      setCityEdit(false);
    }
  }

  function handleLanguagesClick(e) {
    if(languagesEdit === false) {
      setLanguagesEdit(true);
    } else {
      setLanguagesEdit(false);
    }
  }

  function handlePasswordClick(e) {
    if(passwordEdit === false) {
      setPasswordEdit(true);
    } else {
      setPasswordEdit(false);
    }
  }

  // TODO: Uncomment this handleChange and delete the dummy handleChange once the /user
  // endpoint is up and running

  // function handleChange(e) {
  //   const updatedUser = {
  //     ...user,
  //     email: e.target.value
  //   };
  //   updateUser(updatedUser);
  // }

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <div>
      <h1>Personal info</h1>
      {/* Remove dummy data (i.e. Jane Doe) once endpoint is up and running */}
      <Row style={{ fontWeight: 'bold' }}>Name</Row>
      <Row>
        <Col span={12}>
          {nameEdit ?
            <Input
              name='name'
              value={ value }
              onChange={ handleChange }
            />
            : mentor.firstName && mentor.lastName || 'Jane Doe'
            }
            </Col>
            {nameEdit ?
            <Col span={12}><Button type='link' onClick={ handleNameClick }>Save</Button></Col>
            :
            <Col span={12}><Button type='link' onClick={ handleNameClick }>Edit</Button></Col>
            }
      </Row>
      <Divider />
      <Row style={{ fontWeight: 'bold' }}>Date of birth</Row>
      <Row>
      <Col span={12}>
          {dobEdit ?
            <Input
              name='date of birth'
              value={ value }
              onChange={ handleChange }
            />
            : mentor.dateOfBirth || '01/01/2021'
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
          : mentor.timezone || 'Eastern Standard Time'
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
        : mentor.email || 'email@email.com'
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
        : mentor.phone || '+1 000-111-2222'
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
          : mentor.city || 'New York'
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
            : mentor.languages || 'Spanish, English'
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
      <Divider />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    mentor: state.mentor
  };
};

export default connect(mapStateToProps, actions)(MentorProfile);
