import moment from 'moment';
import 'moment-timezone';
import { COMMIT } from '../actions';
import { USER_TYPES } from '../User.redux/User.types';

const BookingInitialState = {
  time_zone: moment.tz.guess(),
  language: 1,
  weekday: 0,
  displayDay: '',
  library: 0, //1 or 0 true or false
  time: false,
  displayTime: '',
  isReturning: true,
  isCommitted: false,
  sameAppointment: 'no',
};

export const booking = (state = BookingInitialState, action) => {
  //this needs to use the payload in someway
  switch (action.type) {
    //this is how you access user roles
    case USER_TYPES.MENTOR:
      const newLibrary = !state.isReturning ? 0 : state.library;
      return {
        ...state,
        isReturning: !state.isReturning,
        library: newLibrary,
      };
    case COMMIT:
      return {
        ...state,
        isCommitted: !state.isCommitted,
      };
    default:
      return state;
  }
};
