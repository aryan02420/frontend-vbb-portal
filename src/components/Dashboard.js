import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

// import MentorProfile from "./MentorProfile";

class Dashboard extends React.Component {
  state = {
    sessionslots: [],
  };

  fetchSessionSlotData = () => {
    axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
    axios.defaults.xsrfCookieName = 'csrftoken';
    axios.defaults.headers = {
      'Content-Type': 'application/json',
      Authorization: `Token ${this.props.token}`,
    };
    axios
      .get('http://127.0.0.1:8000/api/session/')
      .then((res) => {
        this.setState({
          sessionslots: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
        alert('There was an error in retrieving your mentoring sessions', err);
      });
  };

  componentDidMount() {
    this.fetchSessionSlotData();
  }

  render() {
    return (
      <div>
        <div>
          <h1>My Weekly Mentoring Session</h1>

          {this.state.sessionslots && this.state.sessionslots.length > 0 ? (
            <ul>
              {this.state.sessionslots.map((apt) => {
                console.log(apt);
                return (
                  <li key={apt.id} value={apt.event_id}>
                    <a
                      href={`/sessiondetails/${apt.id}/`}
                    >
                      {apt.display}
                    </a>
                  </li>
                );
              })}
            </ul>
          ) : (
            <>
              <h4>
                <b>Uh oh!</b> You don't have any mentoring sessions booked yet.
              </h4>
              <h4>
                Press the green button below to make your first booking!
              </h4>
            </>
          )}
          <div>
            <a href="/booking/">
              + Book Mentoring Session
            </a>
            <a
              href="https://calendar.google.com/calendar/r"
              target="_blank"
              rel="noopener noreferrer"
            >
              View My Sessions Calendar
            </a>
          </div>
          {/* <MentorProfile /> */}
        </div>
        <div>
          <h1>Mentoring Resources</h1>
          <div>
            <a
              href="https://360.articulate.com/review/content/73bf3afe-47f9-4f9f-aa4d-70bf27fbe8d5/review"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mentor Training Module
            </a>
            <a
              href="mailto:mentor@villagebookbuilders.org"
            >
              Contact your Mentor Advisor
            </a>
            {/*bold the contact*/}
            <a
              href="https://docs.google.com/document/d/e/2PACX-1vR5-WnzhSJ88pfh2yctr7JuRXglAD55q8eluMPnLA1fTIyeKxxrGvL4r7D7wZh8mvd6WTL9GJJ1tkdD/pub"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mentoring Guide
            </a>
            <a
              href="https://idroo.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Whiteboard
            </a>
            <a
              href="https://www.khanacademy.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Khan Academy
            </a>
            <a
              href="https://classroom.google.com/u/0/h"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Classroom
            </a>
            <a
              href="https://www.facebook.com/groups/villagementors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Village Mentors FB Group
            </a>
            <a
              href="https://apps.google.com/meet/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Meets
            </a>
            <a
              href="https://www.facebook.com/VillageBookBuilders"
              target="_blank"
              rel="noopener noreferrer"
            >
              VBB Facebook Page
            </a>
            <a
              href="https://www.villagebookbuilders.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              VBB Home Website
            </a>
          </div>
          <p>
            <b>
              If you would like to change a mentoring session, have questions
              about mentoring, or ANY QUESTIONS, please
              <a href="mailto:mentor@villagebookbuilders.org">
                contact your mentor advisor
              </a>
              at mentor@villagebookbuilders.org!
            </b>
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.authToken,
  };
};

export default connect(mapStateToProps)(Dashboard);
