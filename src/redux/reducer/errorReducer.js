const errorReducer = (state = false, action) => {
    if (action.type === 'FETCH_ERROR') return !state;
    return state;
};
export default errorReducer;