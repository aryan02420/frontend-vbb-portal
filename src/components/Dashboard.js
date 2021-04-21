import React from 'react';
import { connect } from 'react-redux';
import { Card, Col, Row, Button } from 'antd';

import articulate from '../images/articulate-icon.png';
import meet from '../images/meet-icon.webp';
import classroom from '../images/classroom-icon.png';
import village from '../images/village.png';
import facebook from '../images/facebook-icon.png';
import idroo from '../images/idroo-icon.png';
import khan from '../images/khan-icon.jpg';

// import MentorProfile from "./MentorProfile";

const Dashboard = () => {

  const { Meta } = Card;

  return (
    <div>
      <h1>Weekly Mentoring Session</h1>
      {/* {sessionslots && sessionslots.length > 0 ? (
            <ul>
              {sessionslots.map((apt) => {
                console.log(apt);
                return (
                  <li key={apt.id} value={apt.event_id}>
                    <a href={`/sessiondetails/${apt.id}/`}>{apt.display}</a>
                  </li>
                );
              })}
            </ul>
          ) : ( */}
            <div>
              <h4> Uh oh! You don't have any mentoring sessions booked yet.</h4>
              <Button
                type="primary"
                href="/booking/"
                target="_blank"
              >Book a Mentoring Session</Button>
              <Button
                href="https://calendar.google.com/calendar/r"
                target="_blank"
              >
                View Your Calendar
              </Button>
            </div>
      {/* <MentorProfile /> */}
      <h1>Resources</h1>
      <div>
          <Row gutter={16}>
            <Col span={8}>
              <a href=''></a>
              <Card
                style={{ width: 200 }}
                cover={
                  <img
                    alt="Articulate logo"
                    src={articulate}
                  />
                }
              >
                <Meta
                  title="Mentor Training"
                  description="Access your training modules here."
                />
              </Card>,
            </Col>
            <Col span={8}>
            <Card
                style={{ width: 200 }}
                cover={
                  <img
                    alt='Village Book Builders logo'
                    src={village}
                  />
                }
              >
                <Meta
                  title="Mentor Advisor"
                  description="Contact your mentor advisor."
                />
              </Card>,
            </Col>
            <Col span={8}>
              <a href='https://docs.google.com/document/d/e/2PACX-1vR5-WnzhSJ88pfh2yctr7JuRXglAD55q8eluMPnLA1fTIyeKxxrGvL4r7D7wZh8mvd6WTL9GJJ1tkdD/pub'></a>
              <Card
                  style={{ width: 200 }}
                  cover={
                    <img
                    alt="Village Book Builders logo"
                    src={village}
                  />
                  }
                >
                  <Meta
                    title="Mentoring Guide"
                    description=""
                  />
                </Card>,
              </Col>
              <Col span={8}>
                <a href='https://idroo.com/'></a>
                <Card
                  style={{ width: 200 }}
                  cover={
                    <img
                    alt=""
                    src={idroo}
                    />
                  }
                >
                  <Meta
                    title="Whiteboard"
                    description=""
                  />
                </Card>,
              </Col>
              <Col span={8}>
                <a href='https://www.khanacademy.org/'></a>
                <Card
                  style={{ width: 200 }}
                  cover={
                    <img
                    alt=""
                    src={khan}
                  />
                  }
                >
                  <Meta
                    title="Khan Academy"
                    description=""
                  />
                </Card>,
              </Col>
              <Col span={8}>
                <a href='https://classroom.google.com/u/0/h'></a>
                <Card
                  style={{ width: 200 }}
                  cover={
                    <img
                    alt=""
                    src={classroom}
                    />
                  }
                >
                  <Meta
                    title="Google Classroom"
                    description=""
                  />
                </Card>,
              </Col>
              <Col span={8}>
                <a href='https://apps.google.com/meet/'></a>
                <Card
                  style={{ width: 200 }}
                  cover={
                    <img
                    alt=""
                    src={meet}
                    />
                  }
                >
                  <Meta
                    title="Google Meet"
                    description=""
                  />
                </Card>,
              </Col>
              <Col span={8}>
                <a href='https://www.facebook.com/groups/villagementors'></a>
                <Card
                  style={{ width: 200 }}
                  cover={
                    <img
                    alt=""
                    src={facebook}
                    />
                  }
                >
                  <Meta
                    title="VBB Mentors Facebook Group"
                    description=""
                  />
                </Card>,
              </Col>
              <Col span={8}>
                <a href='https://www.facebook.com/VillageBookBuilders'></a>
                <Card
                  style={{ width: 200 }}
                  cover={
                    <img
                    alt=""
                    src={facebook}
                    />
                  }
                >
                  <Meta
                    title="VBB Facebook Page"
                    description=""
                  />
                </Card>,
              </Col>
              <Col span={8}>
                <a href='https://www.villagebookbuilders.org/'></a>
                <Card
                  style={{ width: 200 }}
                  cover={
                    <img
                    alt=""
                    src={village}
                    />
                  }
                >
                  <Meta
                    title="VBB Website Home"
                    description=""
                  />
                </Card>,
              </Col>
          </Row>
        </div>,
      <p>
        If you would like to change a mentoring session or have any mentoring-related questions, please
        <a
        href="mailto:mentor@villagebookbuilders.org"
        style={{ marginLeft: '5px' }}
        >
          contact your mentor advisor
        </a>
        .
      </p>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    token: state.authToken,
  };
};

export default connect(mapStateToProps)(Dashboard);


// state = {
//   sessionslots: [],
// };

// fetchSessionSlotData = () => {
//   axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
//   axios.defaults.xsrfCookieName = 'csrftoken';
//   axios.defaults.headers = {
//     'Content-Type': 'application/json',
//     Authorization: `Token ${this.props.token}`,
//   };
//   axios
//     .get('http://127.0.0.1:8000/api/session/')
//     .then((res) => {
//       this.setState({
//         sessionslots: res.data,
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//       alert('There was an error in retrieving your mentoring sessions', err);
//     });
// };

// componentDidMount() {
//   this.fetchSessionSlotData();
// }
