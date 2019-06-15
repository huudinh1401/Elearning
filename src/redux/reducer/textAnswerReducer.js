const textAnswerReducer = (state = null, action) => {
    if (action.type === 'IS_CHECKING_TRUE') return null;
    if (action.type === 'IS_CHECKING_FALSE') return action.textAnswer;
    if (action.type === 'IS_CONTINUE') return null;
    if (action.type === 'IS_FINISH') return null;
    return state;
};
export default textAnswerReducer;