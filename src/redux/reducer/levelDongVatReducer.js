const levelDongVatReducer = (state = -1, action) => {
    if (action.type === 'LEVEL_DONGVAT') return state + 1;
    return state;
};
export default levelDongVatReducer;