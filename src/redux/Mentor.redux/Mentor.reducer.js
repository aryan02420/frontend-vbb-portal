import { GET_MENTOR_INFO } from '../actions';

const mentorInitialState = {
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  timezone: '',
  email: '',
  phone: '',
  city: '',
  languages: '',
};

export const mentor = (state = mentorInitialState, action) => {
  switch (action.type) {
    case GET_MENTOR_INFO:
      return action.payload;
    default:
      return state;
  }
};
