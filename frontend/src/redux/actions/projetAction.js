import {
    PROJET_LIST_FAILURE,
    PROJET_LIST_REQUEST,
    PROJET_LIST_SUCCESS,
} from "../type/projetType.js";
import axios from 'axios';

export const listPoducts = () => async (dispatch) => {
    try {
        //on dispatch la request pour le loading par exemple
        dispatch({ type: PROJET_LIST_REQUEST });
        const { data } = await axios.get(`/api/v1/projets`);

        //on dispatch les datas.. stop loading and display the data
        dispatch({ type: PROJET_LIST_SUCCESS, payload: data });
    } catch (error) {
        //dispatch des errors
        dispatch({
            type: PROJET_LIST_FAILURE,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};
