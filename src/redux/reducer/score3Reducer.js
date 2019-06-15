const score3Reducer = (state = null, action) => {
    if (action.type === 'IS_SCORE_3') return action.Score3;
    if (action.type === 'IS_FINISH') return null;
    return state;
};
export default score3Reducer;