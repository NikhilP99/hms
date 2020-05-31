import {OPEN_MODAL, CLOSE_MODAL} from '../helpers/constants'

export const open_modal = (data) => dispatch => {
    dispatch({
        type: OPEN_MODAL,
        title: data.title,
        message: data.message
    })
}

export const close_modal = () => dispatch => {
    dispatch({
        type: CLOSE_MODAL
    })
}