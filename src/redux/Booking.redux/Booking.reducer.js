import moment from 'moment';
import 'moment-timezone';
import * as actionTypes from './Booking.action';

const BookingInitialState = {
    libraries: [], 
    languages: [], 
    times: [], 
    time_zone: moment.tz.guess(), 
    language: '',
    weekday: '', 
    displayDay: '',
    library: '', 
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
    case actionTypes.UPDATING_CHECKBOX:
        return {
            ...state,
            [action.payload.name]: action.payload.value
        }
    case actionTypes.DROPDOWN_CHANGE:
        return {
            ...state,
            [action.payload.name]: action.payload.value
        }
    case actionTypes.SET_LANGUAGES:
        return {
            ...state,
            languages: action.payload
        }
    case actionTypes.SET_LIBRARIES:
        return {
            ...state,
            libraries: action.payload
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
