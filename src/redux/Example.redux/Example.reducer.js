import { UPDATE_INPUT } from './Example.actions';

//stretch how do you clear this?
export const exampleInput = (state = '', action) => {
  switch (action.type) {
    case UPDATE_INPUT:
      return action.payload;
    default:
      return state;
  }
};
