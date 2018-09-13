import { QUESTION_ONE_CHANGED, QUESTION_TWO_CHANGED, QUESTION_THREE_CHANGED, QUESTION_FOUR_CHANGED, QUESTION_FIVE_CHANGED, QUESTION_SIX_CHANGED } from '../actions/types';

const INITIAL_STATE = {
    questionOne: '',
    questionTwo: '',
    questionThree: '',
    questionFour: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case QUESTION_ONE_CHANGED:
        return { ...state, questionOne: action.payload };
    case QUESTION_TWO_CHANGED:
        return { ...state, questionTwo: action.payload };
    case QUESTION_THREE_CHANGED:
        return { ...state, questionThree: action.payload };
    case QUESTION_FOUR_CHANGED:
        return { ...state, questionFour: action.payload };
    case QUESTION_FIVE_CHANGED:
        return { ...state, questionFour: action.payload };
    case QUESTION_SIX_CHANGED:
        return { ...state, questionFour: action.payload };
    default:
        return state;
    }
};
