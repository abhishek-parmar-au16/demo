import {createSlice} from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name:"counter",
    initialState :{
        count:0
    }
})


export default counterSlice.reducer