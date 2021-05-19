import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import moment from 'moment';
import 'moment-timezone';

import menteeComputer from '../images/vbb-mentee-computer.png';

import * as actionCreators from '../redux/Booking.redux/Booking.action';

import { DateTime } from 'luxon';

// import { mentorChange, commitChange } from '../redux/Booking.redux/Booking.action';

class Booking extends React.Component {

  componentDidMount() {
    this.props.getBookingData();
    this.props.getTimes();
  }

  // componentDidUpdate(prevProps) {
  //   if (this.props.language !== prevProps.language ||
  //     this.props.time_zone !== prevProps.time_zone ||
  //     this.props.library !== prevProps.library ||
  //     this.props.weekday !== prevProps.weekday ||
  //     this.props.sameAppointment !== prevProps.sameAppointment
  //     ) {
  //     this.props.getTimes()
  //   }
  // }

  display_day = (time) => {
    const weekday = DateTime.fromISO(time).weekdayLong
    return weekday
  };

  convert_timezone = (t) => {
    const newTime = DateTime.fromISO(t, { zone: this.props.time_zone });
    return newTime.toString()
  }

  // display_time = (day) => {
  //   var tzmsm = this.shift_time(msm, true);
  //   let mins = ':' + (msm % 60);
  //   if (msm % 60 === 0) mins = '';
  //   else if (msm % 60 < 10) mins = ':0' + (msm % 60);
  //   var time24 = parseInt(tzmsm / 60) % 24;
  //   var time12 = parseInt(tzmsm / 60) % 12;
  //   if (time24 === 0) return '12' + mins + 'am';
  //   if (time24 === 12) return '12' + mins + 'pm';
  //   if (time24 === time12) return time12 + mins + 'am';
  //   return time12 + mins + 'pm';
  // };

  // shift_time = (msm, isEastern) => {
  //   var now = moment();
  //   now.tz(this.props.time_zone);
  //   var localOffset = now.utcOffset();
  //   //eastern time zone is the server standard as of 8/1/2020
  //   now.tz('US/Eastern');
  //   var easternOffset = now.utcOffset();
  //   var diffInMinutes = localOffset - easternOffset;
  //   //isEastern designates whether the given msm is in Eastern or the local time_zone
  //   if (isEastern) return (msm + diffInMinutes + 10080) % 10080;
  //   return (msm - diffInMinutes + 10080) % 10080;
  // };

  // handleMentorChange = () => { // modify
  //   this.setState(
  //     {
  //       isReturning: !this.state.isReturning,  // modify
  //     },
  //     () => {
  //       if (!this.state.isReturning) {
  //         this.setState({  // modify
  //           library: 0,
  //         });
  //       }
  //     }
  //   );
  // };

  // handleCommitChange = (e) => {
  //   this.setState({
  //     isCommitted: !this.state.isCommitted,  // modify
  //   });
  // };

  // handleDropDownChange = (e) => {
  //   var newState = {};
  //   newState[e.target.name] = e.target.value;
    
  //   this.setState(newState, () => {
  //     this.fetchTimes();
  //   });
  // };

  submitRequest = () => {
    this.props.handleCommitChange(); // modified
    this.postRequest();
  };

  postRequest = () => {
    alert(
      'Please wait while we submit your booking request, then refresh the page (this might take 10 or 20 seconds)'
    );
    axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
    axios.defaults.xsrfCookieName = 'csrftoken';
    axios.defaults.headers = {
      'Content-Type': 'application/json',
      Authorization: `Token ${this.props.token}`,
    };
    axios
      .post('http://127.0.0.1:8000/api/book/', null, {
        params: {
          library: this.props.library,
          language: this.props.language,
          msm: this.props.time,
        },
      })
      .then((res) => {
        console.log('Success: ', res.success);
        alert('Success!');
        this.props.history.push('/');
        window.location.reload(false);
      })
      .catch((err) => {
        alert(
          "We're sorry! Something went wrong while booking your appointment. Please contact your mentor advisor to find out more."
        );
        console.log(err);
      });
    this.props.history.push('/');
  };

  render() {
    // const t = DateTime.now().toString()
    // console.log(t)
    // const newTime = DateTime.fromISO(t, { zone: "Asia/Chongqing" });
    // console.log(newTime.toString())
    // console.log(Object.keys(this.props.times))

    return (
      <div className="twocol-container">
        <div id="booking-box">
          <h1 id="booking-header">Book Your Weekly Mentoring Session Below!</h1>
          
          {/* <p>
            Select a day and time that you have available each week.
            <br />
            We'll match you with a child who needs you as their mentor.
          </p> */}
          <br />
          <div className="booking-fields">
            <label htmlFor="language">Mentoring Language:&nbsp;</label>
            <select
              name="language"
              id="language"
              onChange={(e) => this.props.handleDropDownChange(e.target.name, e.target.value)}
            >
              {this.props.languages &&
                this.props.languages.length > 0 &&
                this.props.languages.map((lang, index) => {
                  return (
                    <option key={index}>
                      {lang}
                    </option>
                  );
                })}
            </select>
            <br />
            <br />
            <label htmlFor="time_zone">Your Timezone:</label>&nbsp;
            <select
              name="time_zone"
              id="time_zone"
              onChange={(e) => this.props.handleDropDownChange(e.target.name, e.target.value)}
              value={this.props.time_zone}
            >
              {moment.tz.names().map((tz) => {
                return (
                  <option key={tz} value={tz}>
                    {tz}
                  </option>
                );
              })}
            </select>
            <br />
            <br />
            {/* <br style={{ paddingBottom: "-10px" }} /> */}
            {/* <input
              type="checkbox"
              id="mentor"
              name="mentor"
              onChange={this.handleMentorChange}
            /> */}
            {/* <label htmlFor="mentor">Are you a returning mentor?</label> */}
            {/* <div id="ex-space" /> */}
            {this.props.isReturning && (
              <div>
                <label htmlFor="library">
                  {/* style={{ paddingLeft: "50px" }} */}
                  Your Library:&nbsp;
                </label>
                <select
                  name="library"
                  id="library"
                  onChange={(e) => this.props.handleDropDownChange(e.target.name, e.target.value)}
                  style={{ marginTop: '0px' }}
                >
                  {this.props.libraries &&
                    this.props.libraries.length > 0 &&
                    this.props.libraries.map((lib, index) => {
                      return (
                        <option key={index}>
                          {lib}
                        </option>
                      );
                    })}
                </select>
                <br />
                <br />
              </div>
            )}
            {/* <br /> */}
            <label htmlFor="weekday">Day of the Week:&nbsp;</label>
            <select
              name="weekday"
              id="weekday"
              onChange={(e) => this.props.handleDropDownChange(e.target.name, e.target.value)}
            >
              <option value={1}>Monday</option>
              <option value={2}>Tuesday</option>
              <option value={3}>Wednesday</option>
              <option value={4}>Thursday</option>
              <option value={5}>Friday</option>
              <option value={6}>Saturday</option>
              <option value={7}>Sunday</option>
            </select>
            <br />
            <br />
            <label htmlFor="time">Time of Day:&nbsp;</label>
            <select
              name="time"
              id="time"
              onChange={(e) => this.props.handleDropDownChange(e.target.name, e.target.value)}>
              <option value={false}>Select from Avaliable Times:</option>
              {this.props.times &&
                Object.keys(this.props.times).length > 0 &&
                Object.keys(this.props.times).map((slot, index) => {
                  const start_time = this.convert_timezone(this.props.times[slot].start_time)
                  const end_time = this.convert_timezone(this.props.times[slot].end_time)
                  return (
                    // <option key={time.msm} value={time.msm}>
                    //   {this.display_time(time.msm)}
                    // </option>
                    <option value={start_time} key={index}>
                      {start_time} to {end_time}
                    </option>
                  );
                })}
            </select>
            <br />
            <br />
            {this.props.time && (
              <div>
                <label>
                  Please confirm that the time and library you have selected
                  represent your current mentoring session time and library:{' '}
                </label>
                <p>
                  (If you book a time that is not currently yours, you will
                  displace another mentor from their current mentoring session.
                  if you wish to reschedule, please do that in 2 or 3 weeks once
                  all mentors have completed the transition to this new system.
                  Thank you!)
                </p>
                <select
                  name="sameAppointment"
                  id="sameAppointment"
                  onChange={(e) => this.props.handleDropDownChange(e.target.name, e.target.value)}
                  value={this.props.sameAppointment}
                >
                  <option value="no">No, or I am unsure</option>
                  <option value="yes">Yes, I am sure this slot is mine</option>
                </select>
                <br />
                <br />
                <br />
              </div>
            )}
            {this.props.sameAppointment === 'yes' && (
              <div>
                <input
                  type="checkbox"
                  id="commitment"
                  name="commitment"
                  checked={this.props.isCommitted}
                  onChange={(e) => this.props.handleDropDownChange(e.target.name, e.target.value)}
                />
                <label htmlFor="commitment">
                  Please double check that the time you have selected (every{' '}
                  {this.display_day(this.props.time)} at{' '}
                  {this.props.time}) is your
                  current mentoring time
                </label>
                <br />
                <br />
              </div>
            )}
          </div>
          {/* <p>
            If no avaliable times work with your weekly schedule,
            <br />
            <a href="mailto:mentor@villagebookbuilders.org">
              {" "}
              Contact the mentor advisors {" "}
            </a>
            at mentor@villagebookbuilders.org. <br />
            Please include potential times available in the email! 
          </p> */}
          <br />
          <br />
          <a href="/" type="button" className="btn goback-btn">
            GO BACK
          </a>
          <button
            className="btn btn-light"
            id="requestsession-btn"
            disabled={!this.props.isCommitted || this.props.time === false}
            onClick={this.submitRequest}
          >
            REQUEST SESSION
          </button>
        </div>
        <img
          src={menteeComputer}
          id="booking-picture"
          alt="Pic"
          style={{ width: '600px', margin: '5vw' }}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    booking_state: state.booking,
    token: state.authToken,
    libraries: state.booking.libraries, // async
    languages: state.booking.languages, // async
    times: state.booking.times, // async
    time_zone: state.booking.time_zone,
    language: state.booking.language,
    weekday: state.booking.weekday,
    displayDay: state.booking.displayDay,
    library: state.booking.library,
    time: state.booking.time,
    displayTime: state.booking.displayTime,
    isReturning: state.booking.isReturning,
    isCommitted: state.booking.isCommitted,
    sameAppointment: state.booking.sameAppointment,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleMentorChange: () => dispatch(actionCreators.mentorChange()),
    handleCommitChange: () => dispatch(actionCreators.commitChange()),
    handleDropDownChange: (name, value) => dispatch(actionCreators.dropDownChange(name, value)),
    getBookingData: () => dispatch(actionCreators.getBookingData()),
    getTimes: () => dispatch(actionCreators.getTimes())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Booking);
