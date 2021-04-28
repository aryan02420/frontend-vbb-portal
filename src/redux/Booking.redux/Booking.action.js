import axios from 'axios';
import { PYTHON_API } from '../actions/index';

export const MENTOR_CHANGE = 'MENTOR_CHANGE';
export const COMMIT_CHANGE = 'COMMIT_CHANGE';
export const SET_LIBRARIES = 'SET_LIBRARIES';
export const SET_LANGUAGES = 'SET_LANGUAGES';
export const SET_TIMES = 'SET_TIMES';

export const mentorChange = () => {
    return {
        typy: MENTOR_CHANGE
    }
}

export const commitChange = () => {
    return {
        typy: COMMIT_CHANGE
    }
}

export const setLibraryInBooking = (library) => {
    return {
        type: SET_LIBRARIES,
        payload: library
    }
}

export const setLanguageInBooking = (language) => {
    return {
        type: SET_LANGUAGES,
        payload: language
    }
}

export const setTimeInBooking = (time) => {
  return {
      type: SET_TIMES,
      payload: time
  }
}

// async action
// export const fetchBookingData = () => async (dispatch) =>
// {

//         const response = await axios.get('http://127.0.0.1:8000/api/library/')
//         .then( res => {
//             setLibraries(res.data)
//         })
//         .catch( err => {
//             console.log(err);
//         });
//         axios.get('http://127.0.0.1:8000/api/language/')
//         .then( res => {
//             setLanguages(res.data)
//         })
//         .catch( err => {
//             console.log(err);
//         });

// }

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
    //   const getLibraryResponse = await axios.get(PYTHON_API + 'v1/library/', {
    //     headers,
    //   });
      const getLibraryResponse = await axios.get(
        'http://127.0.0.1:8000/api/library/'
      );
      const getLanguageResponse = await axios.get(
        'http://127.0.0.1:8000/api/language/'
      );

      dispatch(setLibraryInBooking(getLibraryResponse.data));
      dispatch(setLanguageInBooking(getLanguageResponse.data));

    } catch (err) {
      //manage what happens when things go wrong
      console.log('Error in fetchBookingData', err);
    }
  };


/**
 * Gets the Times from the API and adds it to the bookings store
 * @returns void or error
 */
 export const getTimes = () => async (dispatch, getState) => {
  const authToken = getState().authToken;
  try {
    //get user from backend
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`,
    };
  //   const getLibraryResponse = await axios.get(PYTHON_API + 'v1/library/', {
  //     headers,
  //   });
    const getTimeResponse = await axios.get(
      'http://127.0.0.1:8000/api/library/'
    );

    // // need a given API to designate the params
    // params: {
    //   library: this.props.library,
    //   language: this.props.language,
    //   min_msm: this.shift_time(parseInt(this.props.weekday), false),
    //   max_msm: this.shift_time(parseInt(this.props.weekday), false) + 1440,
    // }

    dispatch(setTimeInBooking(getTimeResponse.data));

  } catch (err) {
    //manage what happens when things go wrong
    console.log('Error in fetchTimes', err);
  }
};