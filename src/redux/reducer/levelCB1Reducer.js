const levelCB1Reducer = (state = 0, action) => {
    if (action.type === 'LEVEL_CB1') return state + 1;
    return state;
};
export default levelCB1Reducer;