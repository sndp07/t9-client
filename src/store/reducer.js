
import ACTION_TYPES from './action-types';
import { requestStatus } from '../assets/Constants.json';

const initialState = {
    words: [''],
    hasError: false,
    requestStatus: ''
}

const app = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case ACTION_TYPES.SET_RESPONSE_NUMBER_WORDS:
            return {
                ...state,
                words: [...payload]
            }
        case ACTION_TYPES.SET_API_ERROR_RESPONSE:
            return {
                ...state,
                hasError: true
            }
        case ACTION_TYPES.REQUEST_START:
            return {
                ...state,
                requestStatus: requestStatus.IN_PROGRESS,
                hasError: false
            }
        case ACTION_TYPES.REQUEST_END:
            return {
                ...state,
                requestStatus: requestStatus.COMPLETED
            }

        default:
            return state;
    }
}

export default app;