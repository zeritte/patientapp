import { QUESTION_ONE_CHANGED, QUESTION_TWO_CHANGED, QUESTION_THREE_CHANGED, QUESTION_FOUR_CHANGED, QUESTION_FIVE_CHANGED, QUESTION_SIX_CHANGED } from './types';

export const questionOneChanged = (answer) => {
    return (dispatch) => {
        dispatch({ type: QUESTION_ONE_CHANGED, payload: answer });
    };
};

export const questionTwoChanged = answer => {
    return dispatch => {
        dispatch({ type: QUESTION_TWO_CHANGED, payload: answer });
    };
};

export const questionThreeChanged = answer => {
    return dispatch => {
        dispatch({ type: QUESTION_THREE_CHANGED, payload: answer });
    };
};

export const questionFourChanged = answer => {
    return dispatch => {
        dispatch({ type: QUESTION_FOUR_CHANGED, payload: answer });
    };
};

export const questionFiveChanged = answer => {
    return dispatch => {
        dispatch({ type: QUESTION_FIVE_CHANGED, payload: answer });
    };
};

export const questionSixChanged = answer => {
    return dispatch => {
        dispatch({ type: QUESTION_SIX_CHANGED, payload: answer });
    };
};
