import  { combineReducers } from 'redux';

import filters from './filters';
import guids from './guids';
import cart from './cart';
const rootReducer = combineReducers({
    filters,
    guids,
    cart,
  });

  export default rootReducer;