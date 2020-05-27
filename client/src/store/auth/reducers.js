import {LOGIN, LOGOUT, REGISTER_ERR, REGISTER_SUCCESS} from '../helpers/constants'


let initialState = {
    email: "",
    name: "",
    userType: "",
    loggedIn: false,
    regSuccess: false,
}

export default function(state = initialState, action){
    switch(action.type){
        case LOGIN:
            return {
                ...state,
                email: action.payload.email,
                name: action.payload.name,
                userType: action.payload.userType,
                loggedIn: true
            }
        case LOGOUT:
            return initialState

        case REGISTER_SUCCESS:
            return {
                ...state,
                regSuccess: true
            }
        
        case REGISTER_ERR:
            return {
                ...state,
                regSuccess: false
            }
        default:
            return state
    }
}