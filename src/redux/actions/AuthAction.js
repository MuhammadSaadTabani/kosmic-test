import Constants from "../Constants"

export const updateUserData = (user) => {
    return dispatch => {
        dispatch({
            type: Constants.UPDATE_USER_DATA,
            payload: user
        })
    }
}