const levelRutGon3Reducer = (state = 0, action) => {
    if (action.type === 'LEVEL_RUTGON3') return state + 1;
    return state;
};
export default levelRutGon3Reducer;