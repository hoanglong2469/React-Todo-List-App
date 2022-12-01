import { Alert } from "react-native";
import { call, put, all, takeEvery } from "redux-saga/effects";
import actions from "./actions";
import { addToCart, removeFromCart, getCartByUsername, purchase, clearCart, updateToCart } from "../../services/cart-service";

export function* GET_CART({ payload }) {
  const res = yield call(getCartByUsername, payload.username)
  if (res) {
    yield put({
      type: actions.SET_STATE,
      payload: {
        data: res
      }
    })
    if (payload.callback) yield call(payload.callback)
  } else {
    Alert.alert("Error", "Error getting cart")
  }
}

export function* ADD_TO_CART({ payload }) {
  console.log(payload)
  const res = yield call(addToCart, payload.cartId, payload.item)
  if (res) {
    yield put({
      type: actions.SET_STATE,
      payload: {
        data: res
      }
    })
    if (payload.callback) yield call(payload.callback)
  } else {
    Alert.alert("Something went wrong")
  }
}

export function* REMOVE_FROM_CART({ payload }) {
  const res = yield call(removeFromCart, payload.cartId, payload.item)
  if (res) {
    yield put({
      type: actions.SET_STATE,
      payload: {
        data: res
      }
    })
    if (payload.callback) yield call(payload.callback)
  } else {
    Alert.alert("Something went wrong")
  }
}

export function* UPDATE_CART({ payload }) {
  const res = yield call(updateToCart, payload.cartId, payload.item)
  if (res) {
    yield put({
      type: actions.SET_STATE,
      payload: {
        data: res
      }
    })
    if (payload.callback) yield call(payload.callback)
  } else {
    Alert.alert("Something went wrong")
  }
}

export function* CLEAR_CART({ payload }) {
  const res = yield call(clearCart, payload.cartId)
  if (res) {
    yield put({
      type: actions.SET_STATE,
      payload: {
        data: res
      }
    })
    if (payload.callback) yield call(payload.callback)
  } else {
    Alert.alert("Something went wrong")
  }
}

export function* PURCHASE({ payload }) {
  const res = yield call(purchase, payload.cartId)
  if (res) {
    yield put({
      type: actions.SET_STATE,
      payload: {
        data: res
      }
    })
    if (payload.callback) yield call(payload.callback)
  } else {
    Alert.alert("Something went wrong")
  }
}

export default function* root() {
  yield all([
    takeEvery(actions.GET_CART, GET_CART),
    takeEvery(actions.ADD_TO_CART, ADD_TO_CART),
    takeEvery(actions.REMOVE_FROM_CART, REMOVE_FROM_CART),
    takeEvery(actions.UPDATE_CART, UPDATE_CART),
    takeEvery(actions.CLEAR_CART, CLEAR_CART),
    takeEvery(actions.PURCHASE, PURCHASE),
  ])
}