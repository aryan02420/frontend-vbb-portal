import axios from 'axios';
import { PYTHON_API } from '../actions';

export const COMMIT = 'COMMIT';
export const SET_LIBRARIES = 'SET_LIBRARIES';
export const SET_LANGUAGES = 'SET_LANGUAGES';

export const commitChange = () => {
  return {
    type: COMMIT,
  };
};

export const setLibraryInBooking = (library) => {
  return {
    type: SET_LIBRARIES,
    payload: library,
  };
};

export const setLanguages = (language) => {
  return {
    type: SET_LANGUAGES,
    payload: language,
  };
};

// async action
/**
 * Gets the Library and Language from the API and adds it to the bookings store
 * @returns void or error
 */
export const getBookingData = () => async (dispatch, getState) => {
  const authToken = getState().authToken;
  try {
    //get user from backend
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`,
    };
    //get the libraries from the backend api
    const getLibraryResponse = await axios.get(PYTHON_API + 'v1/library/', {
      headers,
    });
    // get the language
    const getLanguageResponse = await axios.get(
      'http://127.0.0.1:8000/api/language/'
    );
    // set the libraries in the store
    //this is actions
    dispatch(setLibraryInBooking(getLibraryResponse.data));
    // set the language in the store
    //this is an action
    dispatch(setLanguages(getLanguageResponse.data));
  } catch (err) {
    //manage what happens when things go wrong
    console.err('Error in fetchBookingData', err);
  }
};
