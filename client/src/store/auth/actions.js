import axios from 'axios'
import {LOGIN, LOGOUT, OPEN_MODAL} from '../helpers/constants'
import {serverURL,history} from '../../config'

export const login = (data) => dispatch => {
    axios.post(serverURL + '/auth/login',
        {
            email: data.email,
            password: data.password,
            userType: data.userType
        },
        {
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }
    )
    .then(res => {
        console.log('response:',res)
        if(res && res.data && res.data.success && res.data.token!==""){
            localStorage.setItem('my-jwt',res.data.token)

            dispatch({
                type: LOGIN,
                payload: {
                    email: res.data.email,
                    name: res.data.name,
                    userType: res.data.userType
                }
            })

            switch(res.data.userType){
                case "Student":
                    history.push('/student_dashboard')
                    break
                case "Admin":
                    history.push('/admin_panel')
                    break
                case "Doctor":
                    history.push('/doctor_dashboard')
                    break
                case "Staff":
                    history.push('/staff_panel')
                    break
                default:
                    dispatch({type: LOGOUT})
                    break
            }
            
        }else{
            localStorage.removeItem('my-jwt')
            dispatch({
                type: LOGOUT
            })

            dispatch({
                type: OPEN_MODAL,
                title: "Failed",
                message: "Failed to login, please try again."
            })
        }
    })
    .catch(err => {
        dispatch({
            type: OPEN_MODAL,
            title: "Error",
            message: err.message
        })
        return Promise.reject(err)
    })
}

export const register = (data) => dispatch => {
    axios.post(serverURL + '/auth/register',
        {
            email: data.email,
            password: data.password,
            name: data.name,
            dob: data.dob,
            roll_number: data.roll_number,
            height: data.height,
            weight: data.weight,
            gender: data.gender
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
                type: OPEN_MODAL,
                title: "Success",
                message: "Please proceed to login"
            })
            history.push('/login')
        }else{
            dispatch({
                type: OPEN_MODAL,
                title: "Registration failed",
                message: "Please try again. If it doesn't work, contact admin."
            })
        }
    })
    .catch(err => {
        dispatch({
            type: OPEN_MODAL,
            title: "Error",
            message: err.message
        })
        return Promise.reject(err)
    })
}

export const logout = () => dispatch => {
    dispatch({type: LOGOUT})
}
