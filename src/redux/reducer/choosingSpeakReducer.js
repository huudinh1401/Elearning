const choosingSpeakReducer = (state = false, action) => {
    if (action.type === 'IS_CHOOSING_SPEAK') return !state;
    if (action.type === 'IS_CHOOSING_A') return false;
    if (action.type === 'IS_CHOOSING_B') return false;
    if (action.type === 'IS_CHOOSING_C') return false;
    if (action.type === 'IS_CHOOSING_D') return false;
    if (action.type === 'IS_CONTINUE') return false;
    if (action.type === 'IS_FINISH') return false;
    return state;
};

export default choosingSpeakReducer;