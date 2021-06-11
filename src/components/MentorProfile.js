import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import { Divider, Row, Col, Input, Button } from 'antd';

const MentorProfile = ({ mentor, setMentor }) => {
  const [edit, setEdit] = useState(false);

  function handleOnClick(e) {
    e.preventDefault();
    setEdit(true);
  }

  return (
    <div>
      <h1>Personal info</h1>
      {/* Remove dummy data once endpoint is up and running */}
      <Row style={{ fontWeight: 'bold' }}>Name</Row>
      <Row>
        <Col span={12}>{mentor.firstName} {mentor.lastName} Jane Doe</Col>
        <Col span={12}>Edit</Col>
      </Row>
      <Divider />
      <Row style={{ fontWeight: 'bold' }}>Date of birth</Row>
      <Row>
        <Col span={12}>{mentor.dateOfBirth} 01/01/1900</Col>
        <Col span={12}>Edit</Col>
      </Row>
      <Divider />
      <Row style={{ fontWeight: 'bold' }}>Timezone</Row>
      <Row>
        <Col span={12}>{mentor.timezone} Eastern Standard Time</Col>
        <Col span={12}>Edit</Col>
      </Row>
      <Divider />
      <Row style={{ fontWeight: 'bold' }}>Email</Row>
      <Row>
        <Col span={12}>
        {edit ?
        <Input
          name="email"
          value={mentor.email}
          onChange={(e) => {
            const updatedMentor = {
              ...mentor,
              email: e.target.value,
            };
            setMentor(updatedMentor);
          }}
        />
        : mentor.email, 'email@email.com'}
        </Col>
        <Col span={12}><Button type='link' onClick={ handleOnClick }>Edit</Button></Col>
      </Row>
      <Divider />
      <Row style={{ fontWeight: 'bold' }}>Phone</Row>
      <Row>
        <Col span={12}>{mentor.phone} +1 000-111-2222</Col>
        <Col span={12}>Edit</Col>
      </Row>
      <Divider />
      <Row style={{ fontWeight: 'bold' }}>City</Row>
      <Row>
        <Col span={12}>{mentor.city} New York</Col>
        <Col span={12}>Edit</Col>
      </Row>
      <Divider />
      <Row style={{ fontWeight: 'bold' }}>Languages</Row>
      <Row>
        <Col span={12}>{mentor.languages}English, Spanish</Col>
        <Col span={12}>Edit</Col>
      </Row>
      <Divider />
      <Row style={{ fontWeight: 'bold' }}>Password</Row>
      <Row>
        <Col span={12}>********</Col>
        <Col span={12}>Edit</Col>
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
