import Constants from "../Constants";

const initialState = {
    modalVisible: false
}

export default (state = initialState, action) => {
    switch(action.type){

        case Constants.TOGGLE_INVITE_MODAL:
            return {
                ...state,
                modalVisible: !state.modalVisible
            }
            
        default: return state;
    }
}