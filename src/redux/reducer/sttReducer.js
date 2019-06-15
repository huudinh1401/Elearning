const sttReducer = (state = 1, action) => {
    if (action.type === 'IS_CONTINUE') return state+1;
    if (action.type === 'IS_FINISH') return 1;
    return state;
};
export default sttReducer;