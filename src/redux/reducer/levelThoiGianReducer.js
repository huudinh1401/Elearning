const levelThoiGianReducer = (state = -1, action) => {
    if (action.type === 'LEVEL_THOIGIAN') return state + 1;
    return state;
};
export default levelThoiGianReducer;