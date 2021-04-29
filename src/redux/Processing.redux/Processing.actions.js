export const SET_PROCESSING_LOGIN = 'SET_PROCESSING_LOGIN';

/**
 * Sets login processing state.
 *
 * @param {boolean} processingLogin boolean value
 * @returns action
 */
export const setProcessingLogin = (processingLogin) => {
  return { type: SET_PROCESSING_LOGIN, payload: processingLogin };
};
