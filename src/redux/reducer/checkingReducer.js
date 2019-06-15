const checkingReducer = (state = false, action) => {
    if (action.type === 'IS_CHECKING_TRUE') return !state;
    if (action.type === 'IS_CHECKING_FALSE') return !state;
    if (action.type === 'IS_CONTINUE') return false;
    if (action.type === 'IS_FINISH') return false;
    return state;
};
export default checkingReducer;