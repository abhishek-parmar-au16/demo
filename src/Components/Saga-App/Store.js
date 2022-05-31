import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import sagas from './sagas'
import authReducer from './modules/auth/slice'
import cartReducer from './modules/cart/slice'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
    reducer: {
        auth: authReducer,
        cart: cartReducer
    },
    middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(sagaMiddleware)
})

sagaMiddleware.run(sagas)

export default store;