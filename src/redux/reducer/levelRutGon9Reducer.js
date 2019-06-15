
const levelRutGon9Reducer = (state = 0, action) => {
    if (action.type === 'LEVEL_RUTGON9') return state + 1;
    return state;
};
export default levelRutGon9Reducer;