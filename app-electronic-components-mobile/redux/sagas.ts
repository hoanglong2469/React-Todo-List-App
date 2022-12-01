import { all } from 'redux-saga/effects'
import user from './user/sagas'
import cart from './cart/sagas'
export default function* sagas() {
  yield all([
    user(),
    cart()
  ]);
}