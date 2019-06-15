const levelGiaDinhReducer = (state = -1, action) => {
    if (action.type === 'LEVEL_GIADINH') return state + 1;
    return state;
};
export default levelGiaDinhReducer;