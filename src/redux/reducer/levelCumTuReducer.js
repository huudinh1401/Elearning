const levelCumTuReducer = (state = -1, action) => {
    if (action.type === 'LEVEL_CUMTU') return state + 1;
    return state;
};
export default levelCumTuReducer;