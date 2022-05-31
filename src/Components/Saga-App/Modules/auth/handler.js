import { call, put } from 'redux-saga/effects'
import { loginSignUpSuccess, loginSignUpError } from './slice'
import { loginHandler, saveDataToLocalStorage } from './request'


export function* handleLogin({ payload }) {
    try {
        let response = yield call(loginHandler, payload)
        yield put(loginSignUpSuccess(response))
        yield call(saveDataToLocalStorage, { ...response, isAuthenticated: true })
    } catch (err) {
        yield call(saveDataToLocalStorage, null)
        yield put(loginSignUpError())
    }
}