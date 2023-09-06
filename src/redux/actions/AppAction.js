import Constants from "../Constants"


export const toggleInviteModal = () => {
    return dispatch => {
        dispatch({
            type: Constants.TOGGLE_INVITE_MODAL,
        })
    }
}