import { SET_WEB3, SET_CONTRACT } from './types';

// setting initial state
const initialState = {
  web3: null,
  contract: null
};

// Reducer
export default (state = initialState, action = {}) => {
  const { payload = {} } = action;
  const { web3, contract } = payload;

  switch (action.type) {
    case SET_WEB3: 
      return {...state, web3};
    case SET_CONTRACT: 
      return {...state, contract};
    default:
      return state;
  }
}

// Action Creators
export const setWeb3 = (web3) => {	
	return {
		type: SET_WEB3,
		payload: { web3 }
	}
};

export const setContract = (contract) => {  
  return {
    type: SET_CONTRACT,
    payload: { contract }
  }
};

