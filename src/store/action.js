
import ACTION_TYPES from './action-types';
import { endpoints } from '../assets/Constants.json';

const makeAPICall = async (url) => {
    return await fetch(url);
}

export const convertNumberToWords = (phoneNumber, resultType = true) => async dispatch => {
    dispatch({ type: ACTION_TYPES.REQUEST_START });

    const url = `${endpoints.T9_FETCH_RESULT}?phoneNumber=${phoneNumber}&resultType=${resultType}`;

    const response = await makeAPICall(url);

    if (response.ok) {
        const words = await response.json();
        dispatch({ type: ACTION_TYPES.SET_RESPONSE_NUMBER_WORDS, payload: words });
    } else {
        dispatch({ type: ACTION_TYPES.SET_API_ERROR_RESPONSE });
    }
    dispatch({ type: ACTION_TYPES.REQUEST_END });
}