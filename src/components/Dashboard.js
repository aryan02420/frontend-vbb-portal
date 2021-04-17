import React from 'react';
import { connect } from 'react-redux';
import { List, Avatar, Space, Button } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';

// import MentorProfile from "./MentorProfile";

const Dashboard = () => {

  const resourceData = [
    {
      href: 'https://360.articulate.com/review/content/73bf3afe-47f9-4f9f-aa4d-70bf27fbe8d5/review',
      title: 'Mentor Training Module',
      avatar: '',
      description:
        '',
      content:
        '',
    },
    {
      href: 'mailto:mentor@villagebookbuilders.org',
      title: 'Mentor Advisor Contact',
      avatar: '',
      description:
        '',
      content:
        '',
    },
    {
      href: 'https://docs.google.com/document/d/e/2PACX-1vR5-WnzhSJ88pfh2yctr7JuRXglAD55q8eluMPnLA1fTIyeKxxrGvL4r7D7wZh8mvd6WTL9GJJ1tkdD/pub',
      title: 'Mentoring Guide',
      avatar: '',
      description:
        '',
      content:
        '',
    },
    {
      href: 'https://idroo.com/',
      title: 'Whiteboard',
      avatar: '',
      description:
        '',
      content:
        '',
    },
    {
      href: 'https://www.khanacademy.org/',
      title: 'Khan Academy',
      avatar: '',
      description:
        '',
      content:
        '',
    },
    {
      href: 'https://classroom.google.com/u/0/h',
      title: 'Google Classroom',
      avatar: '',
      description:
        '',
      content:
        '',
    },
    {
      href: 'https://www.facebook.com/groups/villagementors',
      title: 'VBB Mentors Facebook Group',
      avatar: '',
      description:
        '',
      content:
        '',
    },
    {
      href: 'https://apps.google.com/meet/',
      title: 'Google Meet',
      avatar: '',
      description:
        '',
      content:
        '',
    },
    {
      href: 'https://www.facebook.com/VillageBookBuilders',
      title: 'VBB Facebook Page',
      avatar: '',
      description:
        '',
      content:
        '',
    },
    {
      href: 'https://www.villagebookbuilders.org/',
      title: 'VBB Website',
      avatar: '',
      description:
        '',
      content:
        '',
    }
  ];

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
                View Calendar
              </Button>
            </div>
      {/* <MentorProfile /> */}
      <h1>Resources</h1>
      <p>
        If you would like to change a mentoring session or have any mentoring-related questions, please
        <a href="mailto:mentor@villagebookbuilders.org">
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
