const choosingCReducer = (state = false, action) => {
    if (action.type === 'IS_CHOOSING_A') return false;
    if (action.type === 'IS_CHOOSING_B') return false;
    if (action.type === 'IS_CHOOSING_C') return !state;
    if (action.type === 'IS_CHOOSING_D') return false;
    if (action.type === 'IS_CONTINUE') return false;
    if (action.type === 'IS_FINISH') return false;
    return state;
};

export default choosingCReducer;
