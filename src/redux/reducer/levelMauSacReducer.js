const levelMauSacReducer = (state = -1, action) => {
    if (action.type === 'LEVEL_MAUSAC') return state + 1;
    return state;
};
export default levelMauSacReducer;