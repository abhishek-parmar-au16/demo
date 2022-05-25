import {configureStore} from '@reduxjs/toolkit'
import counterReducer from './modules//counter/slice'

const store = configureStore({
    reducer : {
        counter : counterReducer
    }
})

export default store