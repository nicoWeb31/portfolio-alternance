import {
    PROJET_LIST_FAILURE,
    PROJET_LIST_REQUEST,
    PROJET_LIST_SUCCESS,
} from "../type/projetType.js";

export const projetReducer = (state = {projets:[]}, action) => {
    switch (action.type) {
        case PROJET_LIST_REQUEST:
            return {
                loading: true,
                projets:[],
            };
        case PROJET_LIST_SUCCESS:
            console.log(action.payload)
            return {
                loading: false,
                message: action.payload
            };

        case PROJET_LIST_FAILURE:
            console.log(action.payload)
            return {
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};