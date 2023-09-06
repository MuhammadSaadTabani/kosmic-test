import Constants from "../Constants";

const initialState = {
    user: {
        name: "John Clark",
        email: "john@gmail.com",
        phone: "+1234567890",
        photo: "",
    }
}

export default (state = initialState, action) => {
    switch(action.type){

        case Constants.UPDATE_USER_DATA:
            return {
                ...state,
                user: action.payload
            }

        default: return state;
    }
}