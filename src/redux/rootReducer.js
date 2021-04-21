import { combineReducers } from 'redux';

import { user } from './User.redux/User.reducer';
import { loading } from './Loading.redux/Loading.reducer';
import { isError } from './IsError.redux/IsError.reducer';
import { authToken } from './AuthToken.redux/AuthToken.reducer';
import { sessionSlot } from './SessionSlot.redux/SessionSlot.reducer';
import { registrationForm } from './Registration.redux/RegistrationForm.reducer';
import { booking } from './Booking.redux/Booking.reducer';

/**
 * Exports all reducers as a single combined reducer
 */
const rootReducer = combineReducers({
  loading,
  isError,
  authToken,
  sessionSlot,
  user,
  registrationForm,
  booking
});

export default rootReducer;
