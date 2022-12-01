import { combineReducers } from 'redux';
import user from './user/reducer';
import cart from './cart/reducer';

const reducer = combineReducers({
  user,
  cart  
})

export default reducer