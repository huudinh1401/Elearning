const levelQuanAoReducer = (state = -1, action) => {
    if (action.type === 'LEVEL_QUANAO') return state + 1;
    return state;
};
export default levelQuanAoReducer;