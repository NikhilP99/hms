import {LOGIN, LOGOUT} from '../helpers/constants'


let initialState = {
    email: "",
    name: "",
    userType: "",
    loggedIn: false
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
        default:
            return state
    }
}