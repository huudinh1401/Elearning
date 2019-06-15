const score2Reducer = (state = null, action) => {
    if (action.type === 'IS_SCORE_2') return action.Score2;
    if (action.type === 'IS_FINISH') return null;
    return state;
};
export default score2Reducer;