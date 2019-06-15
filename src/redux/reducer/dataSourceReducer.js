const dataSourceReducer = (state = [], action) => {
    if (action.type === 'FETCH_SUCCESS') return action.dataSource;
    return state;
};
export default dataSourceReducer;