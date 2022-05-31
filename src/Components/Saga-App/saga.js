import { all } from 'redux-saga/effects'
import authWatcher from './modules/auth/watcher'
import cartWatcher from './modules/cart/watcher'

function* sagaWatcher() {
    yield all([
        ...authWatcher,
        ...cartWatcher
    ])
}


export default sagaWatcher;