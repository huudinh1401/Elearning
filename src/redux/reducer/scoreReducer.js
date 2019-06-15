const scoreReducer = (state = 0, action) => {
    if (action.type === 'IS_SCORE') return state+1;
    if (action.type === 'IS_FINISH') return 0;
    return state;
};
export default scoreReducer;