const levelRutGon6Reducer = (state = 0, action) => {
    if (action.type === 'LEVEL_RUTGON6') return state + 1;
    return state;
};
export default levelRutGon6Reducer;