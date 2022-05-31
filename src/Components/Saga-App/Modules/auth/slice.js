import { createSlice } from '@reduxjs/toolkit'


function getLocalStorgeState() {
    let initialState = !!window.localStorage.getItem('auth') ? {
        loginDialog: false,
        status: 'idle',
        isLogin: true,
        sessionExpired: false,
        ...JSON.parse(window.localStorage.getItem('auth'))
    } : {
        user: null,
        token: "",
        isAuthenticated: false,
        loginDialog: false,
        sessionExpired: false,
        isLogin: true,
        status: 'idle'
    }
    return initialState
}

const authSlice = createSlice({
    name: "auth",
    initialState: getLocalStorgeState,
    reducers: {
        openDialog: (state) => {
            state.loginDialog = true
        },
        closeDialog: (state) => {
            state.loginDialog = false
            state.status = 'idle'
            state.isLogin = true
        },
        switchLogin: (state) => {
            state.isLogin = !state.isLogin
            state.status = 'idle'
        },
        signOut: (state) => {
            state.isAuthenticated = false
            state.user = null
            state.token = ''
        },
        notifySessionExpiry: (state) => {
            state.isAuthenticated = false
            state.user = null
            state.token = ''
            state.sessionExpired = true
        },
        closeSessionExpiryNotify: (state) => {
            state.sessionExpired = false
        },
        loginSignUpUser: (state) => {
            state.status = 'loading'
        },
        loginSignUpSuccess: (state, { payload }) => {
            state.user = payload.user
            state.token = payload.token
            state.isAuthenticated = true
            state.loginDialog = false
            state.isLogin = true
            state.status = 'idle'
        },
        loginSignUpError: (state) => {
            state.status = 'error'
            state.user = null
            state.isAuthenticated = false
            state.token = ''
        }
    }
})
export const { openDialog, closeDialog, switchLogin, signOut, notifySessionExpiry, closeSessionExpiryNotify, loginSignUpUser, signUpUser, loginSignUpSuccess, loginSignUpError } = authSlice.actions
export const getAuthState = (state) => state.auth
export default authSlice.reducer