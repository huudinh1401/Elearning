const backgroundColorCheckingReducer = (state = null, action) => {
    if (action.type === 'IS_CHECKING_TRUE' || action.type === 'IS_CHECKING_SPEAK_TRUE') return '#66FF00';
    if (action.type === 'IS_CHECKING_FALSE' || action.type === 'IS_CHECKING_SPEAK_FALSE') return 'red';
    if (action.type === 'IS_CONTINUE') return null;
    if (action.type === 'IS_FINISH') return null;
    return state;
};
export default backgroundColorCheckingReducer;