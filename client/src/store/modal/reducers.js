import {OPEN_MODAL, CLOSE_MODAL} from '../helpers/constants'


let initialState = {
    open: false,
    title: "",
    message: ""
}

export default function(state = initialState, action){
    switch(action.type){
        case OPEN_MODAL:
            return {
                ...state,
                open: true,
                title: action.title,
                message: action.message
            }
        case CLOSE_MODAL:
            return initialState
        default:
            return state
    }
}