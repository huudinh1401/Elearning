const levelCB2Reducer = (state = -1, action) => {
    if (action.type === 'LEVEL_CB2') return state + 1;
    return state;
};
export default levelCB2Reducer;