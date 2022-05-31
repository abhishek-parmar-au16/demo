import axios from 'axios'
import { loginApi, signUpApi } from '../../../api/endpoints'

export async function loginHandler(params) {
    let { type, ...rest } = params
    let response = await axios.post(type === 'login' ? loginApi : signUpApi, rest)
    return response.data.data
}
export function saveDataToLocalStorage(values) {
    if (values === null) window.localStorage.removeItem('auth')
    else window.localStorage.setItem('auth', JSON.stringify(values))
}