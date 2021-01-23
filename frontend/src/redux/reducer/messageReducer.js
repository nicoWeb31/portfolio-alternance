import {
    CREATE_MESSAGE_SUCCESS,
    CREATE_MESSAGE_FAIL,
    CREATE_MESSAGE_REQUEST,
} from "../type/messageType";

export const messageReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_MESSAGE_REQUEST:
            return {
                loading: true,
            };
        case CREATE_MESSAGE_SUCCESS:
            console.log(action.payload)
            return {
                loading: false,
                success: true,
                message: action.payload,
            };

        case CREATE_MESSAGE_FAIL:
            console.log(action.payload)
            return {
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};
