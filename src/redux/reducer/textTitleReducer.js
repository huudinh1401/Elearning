
const textTitleReducer = (state = null, action) => {
    if (action.type === 'IS_CHECKING_TRUE') return 'Chính xác';
    if (action.type === 'IS_CHECKING_FALSE') return 'Đáp án đúng:';
    if (action.type === 'IS_CHECKING_SPEAK_TRUE' || action.type === 'IS_CHECKING_SPEAK_FALSE') return 'Dịch';
    if (action.type === 'IS_CONTINUE') return null;
    if (action.type === 'IS_FINISH') return null;
    return state;
};
export default textTitleReducer;