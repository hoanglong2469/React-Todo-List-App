import { Alert } from "react-native";
import { all, call, put, takeEvery } from "redux-saga/effects";
import { login, register } from "../../services/user-service";
import actions from "./actions";
import cartActions from '../cart/actions'

export function* LOGIN({ payload }: any): any {
  yield put({
    type: actions.SET_STATE,
    payload: {
      loading: true
    }
  })
  const res = yield call(login, payload.account)
  if (res) {
    yield put({
      type: actions.SET_STATE,
      payload: {
        loading: false,
        data: res
      }
    })
    yield put({
      type: cartActions.GET_CART,
      payload: {
        username: res.username
      }
    })
    Alert.alert('Login successful!', 'Welcome to our app!')
    if (payload.callback) yield call(payload.callback)
  } else {
    yield put({
      type: actions.SET_STATE,
      payload: {
        loading: false
      }
    })
    Alert.alert('Login failed!', res?.message[0] || 'Username or password incorrect!')
  }
}

export function* REGISTER({ payload }: any): any {
  yield put({
    type: actions.SET_STATE,
    payload: {
      loading: true
    }
  })
  const status = yield call(register, payload.user)
  if (status) {
    yield put({
      type: actions.SET_STATE,
      payload: {
        loading: false
      }
    })
    Alert.alert('Success', 'Register successful!')
    if (payload.callback) yield call(payload.callback)
  } else {
    yield put({
      type: actions.SET_STATE,
      payload: {
        loading: false
      }
    })
    Alert.alert('Fail', 'Register failed')
  }
}

export function* LOGOUT({ payload }: any) {
  yield put({
    type: actions.SET_STATE,
    payload: {
      loading: true
    }
  })
  yield put({
    type: actions.SET_STATE,
    payload: {
      data: null,
      loading: false
    }
  })
  if (payload.callback) yield call(payload.callback)
}

export default function* root() {
  yield all([
    takeEvery(actions.LOGIN, LOGIN),
    takeEvery(actions.REGISTER, REGISTER),
    takeEvery(actions.LOGOUT, LOGOUT),
  ])
}