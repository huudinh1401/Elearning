const levelSoNhieuReducer = (state = -1, action) => {
    if (action.type === 'LEVEL_SONHIEU') return state + 1;
    return state;
};
export default levelSoNhieuReducer;