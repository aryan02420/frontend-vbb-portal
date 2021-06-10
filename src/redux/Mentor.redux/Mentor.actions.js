import axios from 'axios';

import {
  PYTHON_API,
  // setLoading,
  // setLoadingFalse,
  setIsError,
  clearIsError,
} from '../actions';
import { sleep } from '../../util/sleep';

//Action Types
export const GET_MENTOR_INFO ='GET_MENTOR_INFO';

// Thunk Actions
/**
 * getMentorInfo
 * Gets mentor info from the python api given a sessionId from the URL
 * endpoint: /mentor/

 * @param {string} userExternalId
*/

export const getMentorInfo = (userExternalId) => async (dispatch, getState) => {
  // dispatch(setLoading());
  try {
    const token = getState().authToken;
    const url = PYTHON_API + 'v1/mentor/';

    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
    const responseData = await axios.get({ url, headers }).data;

    // dispatch(setLoadingFalse());
    debugger

    //TODO REMOVE logging once we're done with setup
    console.log('res : ', responseData);
    console.log('rd: ', responseData.display);

    dispatch(responseData);
  } catch (err) {
    // dispatch(setLoadingFalse());
    console.error('Error getting user info', err);
    dispatch(
      setIsError('There was an error in retrieving the mentor')
    );
    await sleep(1500);
    dispatch(clearIsError());
  }
};

