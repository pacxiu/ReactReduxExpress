import { SET_ADDRESS } from './types';

// setting initial state
const initialState = {
  address: null
};

// Reducer
export default (state = initialState, action = {}) => {
  const { payload = {} } = action;
  const { address } = payload;

  switch (action.type) {
    case SET_ADDRESS: 
      return {...state, address};
    default:
      return state;
  }
}

// Action Creators
export const setAddress = (address) => {  
  return {
    type: SET_ADDRESS,
    payload: { address }
  }
};