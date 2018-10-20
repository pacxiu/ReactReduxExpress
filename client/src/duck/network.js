import { SET_NETWORK } from './types';

// setting initial state
const initialState = {
  current: null, 
  expected: 1, 
  external: true
}

// Reducer
export default (state = initialState, action = {}) => {
  const { payload = {} } = action;
    const { network } = payload;

  switch (action.type) {
    case SET_NETWORK: 
      return { ...network };
    default:
      return state;
  }
}

// Action Creators
export const setNetwork = (network) => {	
	return {
		type: SET_NETWORK,
		payload: { network }
	}
};