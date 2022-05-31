import { takeLatest } from 'redux-saga/effects'
import { handleLogin } from './handler'
import { loginSignUpUser } from './slice'

let Watcher = [
    takeLatest(loginSignUpUser.type, handleLogin)
]


export default Watcher;