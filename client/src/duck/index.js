import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import web3Reducer from './web3';
import userReducer from './user';
import networkReducer from './network';

const reducers = combineReducers({
  router,
  web3: web3Reducer,
  user: userReducer,
  network: networkReducer
});

export default reducers
