let initialState = {
    count: 0
}

export default function(state = initialState, action){
    switch(action.type){
        case "PLUS":
            return {count: state.count+1}
        case "MINUS":
            return {count: state.count-1}
        default:
            return state
    }
}