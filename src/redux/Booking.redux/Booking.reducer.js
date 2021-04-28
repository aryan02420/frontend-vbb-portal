import moment from 'moment';
import 'moment-timezone';
import * as actionTypes from './Booking.action';

const BookingInitialState = {
    libraries: [], // async
    languages: {}, // async
    times: [], // async
    time_zone: moment.tz.guess(), 
    language: 1,
    weekday: 0, 
    displayDay: '',
    library: false, // 0
    time: false,
    displayTime: '',
    isReturning: true, // 1
    isCommitted: false,
    sameAppointment: 'no'
};

export const booking = (state = BookingInitialState, action) => {
  //this needs to use the payload in someway
  switch (action.type) {
    case actionTypes.MENTOR_CHANGE:
        let newLibrary = state.library
        if ( !state.isReturning ) {
            newLibrary = false
        }
        return {
            ...state,
            isReturning: !state.isReturning,
            library: newLibrary
        }
    case actionTypes.COMMIT_CHANGE:
        return {
            ...state,
            isCommitted: !state.isCommitted
        }
    case actionTypes.SET_LIBRARIES:
        return {
            ...state,
            libraries: action.payload
        }
    case actionTypes.SET_LANGUAGES:
        return {
            ...state,
            languages: action.payload
        }
    case actionTypes.SET_TIMES:
        return {
            ...state,
            times: action.payload
        }
    default:
      return state;
  }
};
