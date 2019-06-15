const choosedReducer = (state = null, action) => {
    if (action.type === 'IS_CHOOSING_A') return action.Choosed;
    if (action.type === 'IS_CHOOSING_B') return action.Choosed;
    if (action.type === 'IS_CHOOSING_C') return action.Choosed;
    if (action.type === 'IS_CHOOSING_D') return action.Choosed;
    if (action.type === 'IS_CONTINUE') return null;
    if (action.type === 'IS_FINISH') return null;
    return state;
};
export default choosedReducer;
