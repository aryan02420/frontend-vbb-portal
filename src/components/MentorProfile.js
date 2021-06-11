import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import { Divider, Row, Col, Input, Button } from 'antd';

const MentorProfile = ({ mentor, updateMentor }) => {
  const [edit, setEdit] = useState(false);
  //TODO: Delete the below useState hook once the /mentor endpoint is up and running
  const [value, setValue] = useState('');

  function handleClick(e) {
    if(edit === false) {
      setEdit(true);
    } else {
      setEdit(false);
    }
  }

  // TODO: Uncomment this handleChange and delete the dummy handleChange once the /mentor
  // endpoint is up and running

  // function handleChange(e) {
  //   const updatedMentor = {
  //     ...mentor,
  //     email: e.target.value
  //   };
  //   updateMentor(updatedMentor);
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
          {edit ?
            <Input
              name='name'
              value={ value }
              onChange={ handleChange }
            />
            : mentor.firstName && mentor.lastName || 'Jane Doe'
            }
            </Col>
            {edit ?
            <Col span={12}><Button type='link' onClick={ handleClick }>Save</Button></Col>
            :
            <Col span={12}><Button type='link' onClick={ handleClick }>Edit</Button></Col>
            }
      </Row>
      <Divider />
      <Row style={{ fontWeight: 'bold' }}>Date of birth</Row>
      <Row>
      <Col span={12}>
          {edit ?
            <Input
              name='date of birth'
              value={ value }
              onChange={ handleChange }
            />
            : mentor.dateOfBirth || '01/01/2021'
            }
            </Col>
            {edit ?
            <Col span={12}><Button type='link' onClick={ handleClick }>Save</Button></Col>
            :
            <Col span={12}><Button type='link' onClick={ handleClick }>Edit</Button></Col>
            }
      </Row>
      <Divider />
      <Row style={{ fontWeight: 'bold' }}>Timezone</Row>
      <Row>
      <Col span={12}>
        {edit ?
          <Input
            name='timezone'
            value={ value }
            onChange={ handleChange }
          />
          : mentor.timezone || 'Eastern Standard Time'
          }
          </Col>
          {edit ?
          <Col span={12}><Button type='link' onClick={ handleClick }>Save</Button></Col>
          :
          <Col span={12}><Button type='link' onClick={ handleClick }>Edit</Button></Col>
          }
      </Row>
      <Divider />
      <Row style={{ fontWeight: 'bold' }}>Email</Row>
      <Row>
        <Col span={12}>
        {edit ?
        <Input
          name='email'
          value={ value }
          onChange={ handleChange }
        />
        : mentor.email || 'email@email.com'
        }
        </Col>
        {edit ?
        <Col span={12}><Button type='link' onClick={ handleClick }>Save</Button></Col>
        :
        <Col span={12}><Button type='link' onClick={ handleClick }>Edit</Button></Col>
        }
      </Row>
      <Divider />
      <Row style={{ fontWeight: 'bold' }}>Phone</Row>
      <Row>
      <Col span={12}>
        {edit ?
        <Input
          name='phone'
          value={ value }
          onChange={ handleChange }
        />
        : mentor.phone || '+1 000-111-2222'
        }
        </Col>
        {edit ?
        <Col span={12}><Button type='link' onClick={ handleClick }>Save</Button></Col>
        :
        <Col span={12}><Button type='link' onClick={ handleClick }>Edit</Button></Col>
        }
      </Row>
      <Divider />
      <Row style={{ fontWeight: 'bold' }}>City</Row>
      <Row>
      <Col span={12}>
        {edit ?
          <Input
            name='city'
            value={ value }
            onChange={ handleChange }
          />
          : mentor.city || 'New York'
          }
          </Col>
          {edit ?
          <Col span={12}><Button type='link' onClick={ handleClick }>Save</Button></Col>
          :
          <Col span={12}><Button type='link' onClick={ handleClick }>Edit</Button></Col>
          }
      </Row>
      <Divider />
      <Row style={{ fontWeight: 'bold' }}>Languages</Row>
      <Row>
        <Col span={12}>
          {edit ?
            <Input
              name='languages'
              value={ value }
              onChange={ handleChange }
            />
            : mentor.languages || 'Spanish, English'
            }
            </Col>
            {edit ?
            <Col span={12}><Button type='link' onClick={ handleClick }>Save</Button></Col>
            :
            <Col span={12}><Button type='link' onClick={ handleClick }>Edit</Button></Col>
            }
      </Row>
      <Divider />
      <Row style={{ fontWeight: 'bold' }}>Password</Row>
      <Row>
        <Col span={12}>
          {edit ?
            <Input
              name='password'
              value={ value }
              onChange={ handleChange }
            />
            : '********'
            }
            </Col>
            {edit ?
            <Col span={12}><Button type='link' onClick={ handleClick }>Save</Button></Col>
            :
            <Col span={12}><Button type='link' onClick={ handleClick }>Edit</Button></Col>
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
