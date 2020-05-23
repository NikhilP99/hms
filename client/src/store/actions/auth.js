import axios from 'axios'
import {serverURL} from '../../config'

export const login = (data) => dispatch => {
    axios.post(serverURL + '/auth/login',
        {
            email: data.email,
            password: data.password
        },
        {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }
    )
    .then(res => {
        console.log('response',res)
        if(res && res.data && res.data.success && res.data.token!==""){
            localStorage.setItem('my-jwt',res.data.token)

            dispatch({
                type: "LOGIN",
                payload: {
                    email: res.data.email,
                    name: res.data.name,
                    userType: res.data.userType
                }
            })
        }else{
            localStorage.removeItem('my-jwt')
            dispatch({
                type: "LOGOUT"
            })
        }
    })
    .catch(res => {return Promise.reject(res)})
}

export const register = (data) => dispatch => {
    axios.post(serverURL + '/auth/register',
        {
            email: data.email,
            password: data.password,
            name: data.name,
            userType: data.userType
        },
        {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }
    )
    .then(res => {
        if(res && res.data && res.data.success){

            dispatch({
                type: "REGISTER_SUCCESS"
            })
        }else{
            dispatch({
                type: "REGISTER_ERR"
            })
        }
    })
    .catch(res => {return Promise.reject(res)})
}

export const logout = () => dispatch => {
    dispatch({type: "LOGOUT"})
}
