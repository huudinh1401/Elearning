const levelLuyenNoiReducer = (state = -1, action) => {
    if (action.type === 'LEVEL_LUYENNOI') return state + 1;
    return state;
};
export default levelLuyenNoiReducer;