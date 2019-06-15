const score1Reducer = (state = null, action) => {
    if (action.type === 'IS_SCORE_1') return action.Score1;
    if (action.type === 'IS_FINISH') return null;
    return state;
};
export default score1Reducer;
