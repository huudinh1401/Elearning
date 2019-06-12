import { createStore, combineReducers } from 'redux';

const defaultArrTitles =  [
        { id: 1, title: 'Cơ Bản 1', Title: 'CB1'},
        { id: 2, title: 'Cơ Bản 2', Title: 'CB2'},
        { id: 3, title: 'Cụm Từ', Title: 'CumTu'},
        { id: 4, title: 'Kiểm Tra Rút Ngắn 3 Kỹ Năng', Title: 'RutGon3'},
        { id: 5, title: 'Động Vật', Title: 'DongVat'},
        { id: 6, title: 'Quần Áo', Title: 'QuanAo'},
        { id: 7, title: 'Số Nhiều', Title: 'SoNhieu'},
        { id: 8, title: 'Kiểm Tra Rút Ngắn 6 Kỹ Năng', Title: 'RutGon6'},
        { id: 9, title: 'Màu Sắc', Title: 'MauSac'},
        { id: 10, title: 'Gia Đình', Title: 'GiaDinh'},
        { id: 11, title: 'Thời Gian', Title: 'RutGon3'},
        { id: 12, title: 'Kiểm Tra Rút Ngắn 9 Kỹ Năng', Title: 'RutGon9'},
    ];
    // levelDongVat: -1, levelQuanAo: -1, levelSoNhieu: -1,
    // levelMauSac: -1, levelGiaDinh: -1, levelThoiGian: -1,
    // levelRutGon3: 0, levelRutGon6: 0, levelRutGon9: 0,
    
    //dataSource: [], error: false, stt: 1,

    //Checking: false, Choosed: null,

    //ChoosingA: false, ChoosingB: false, ChoosingC: false, ChoosingD: false,

    //Score: 0,  Score1: null,  Score2: null, Score3: null,

    //textTitle: null, textAnswer: null, backgroundColorChecking: null,


// const reducer = (state = defaultState, action) =>{
//     switch (action.type) {
        // case 'LEVEL_CB1': return { ...state, levelCB1: state.levelCB1 + 1 };
        // case 'LEVEL_CB2': return { ...state, levelCB2: state.levelCB2 + 1 };
        // case 'LEVEL_CUMTU': return { ...state, levelCumTu: state.levelCumTu + 1};
        //case 'LEVEL_DONGVAT': return { ...state, levelDongVat: state.levelDongVat + 1 };
        //case 'LEVEL_QUANAO': return { ...state, levelQuanAo: state.levelQuanAo + 1 };
        //case 'LEVEL_SONHIEU': return { ...state, levelSoNhieu: state.levelSoNhieu + 1 };
        //case 'LEVEL_MAUSAC': return { ...state, levelMauSac: state.levelMauSac + 1 };
        // case 'LEVEL_GIADINH': return { ...state, levelGiaDinh: state.levelGiaDinh + 1 };
        // case 'LEVEL_THOIGIAN': return{ ...state, levelThoiGian: state.levelThoiGian + 1 };

        // case 'LEVEL_RUTGON3': return { ...state, levelRutGon3: state.levelRutGon3 + 1 };
        // case 'LEVEL_RUTGON6': return { ...state, levelRutGon6: state.levelRutGon6 + 1 };
        // case 'LEVEL_RUTGON9': return { ...state, levelRutGon9: state.levelRutGon9 + 1 };

        //case 'FETCH_SUCCESS': return {...state, dataSource: action.dataSource };
        //case 'FETCH_ERROR': return { ...state, error: true };

        // case 'IS_CHOOSING_A':
        //     return { ...state, ChoosingA: true, ChoosingB: false, ChoosingC: false, ChoosingD: false, Choosed: action.Choosed };
        // case 'IS_CHOOSING_B':
        //     return { ...state, ChoosingA: false, ChoosingB: true, ChoosingC: false, ChoosingD: false, Choosed: action.Choosed };
        // case 'IS_CHOOSING_C':
        //     return { ...state, ChoosingA: false, ChoosingB: false, ChoosingC: true, ChoosingD: false, Choosed: action.Choosed };
        // case 'IS_CHOOSING_D':
        //     return { ...state, ChoosingA: false, ChoosingB: false, ChoosingC: false, ChoosingD: true, Choosed: action.Choosed };

        // case 'IS_CHECKING_TRUE':
        //     return { ...state, Checking: true, textTitle: 'Chính xác', textAnswer: null, backgroundColorChecking: '#66FF00' };
        // case 'IS_CHECKING_FALSE':
        //     return { ...state, Checking: true, textTitle: 'Đáp án đúng:', textAnswer: action.textAnswer,  backgroundColorChecking: 'red' };

//         case 'IS_SCORE_1':return { ...state,Score1: action.Score1 };
//         case 'IS_SCORE_2':return { ...state,Score2: action.Score2 };
//         case 'IS_SCORE_3':return { ...state,Score3: action.Score3 };
//         case 'IS_SCORE': return { ...state,Score: state.Score + 1 };

//         case 'IS_CONTINUE':
//             return { 
//                 ...state,
//                 ChoosingA: false, ChoosingB: false, ChoosingC: false, ChoosingD: false,
//                 Checking: false, Choosed: null,
//                 textTitle: null, textAnswer: null,
//                 stt: state.stt + 1,
//                 backgroundColorChecking: null,
//             };
//         case 'IS_FINISH':
//             return { 
//                 ...state,
//                 ChoosingA: false,  ChoosingB: false,  ChoosingC: false, ChoosingD: false,
//                 Checking: false, Choosed: null,
//                 textTitle: null, textAnswer: null,
//                 backgroundColorChecking: null,
//                 Score1: null, Score2: null, Score3: null, Score: 0,
//                 stt: 1,
//             };
//         default: return state;
//     }
// }
const arrTitlesReducer = (state = defaultArrTitles)=>{
    return state;
};
const levelCB1Reducer = (state = 0, action) => {
    if (action.type === 'LEVEL_CB1') return state + 1;
    return state;
};

const levelCB2Reducer = (state = -1, action) => {
    if (action.type === 'LEVEL_CB2') return state + 1;
    return state;
};

const levelCumTuReducer = (state = -1, action) => {
    if (action.type === 'LEVEL_CUMTU') return state + 1;
    return state;
};

const levelDongVatReducer = (state = -1, action) => {
    if (action.type === 'LEVEL_DONGVAT') return state + 1;
    return state;
};

const levelQuanAoReducer = (state = -1, action) => {
    if (action.type === 'LEVEL_QUANAO') return state + 1;
    return state;
};

const levelSoNhieuReducer = (state = -1, action) => {
    if (action.type === 'LEVEL_SONHIEU') return state + 1;
    return state;
};

const levelMauSacReducer = (state = -1, action) => {
    if (action.type === 'LEVEL_MAUSAC') return state + 1;
    return state;
};
const levelGiaDinhReducer = (state = -1, action) => {
    if (action.type === 'LEVEL_GIADINH') return state + 1;
    return state;
};
const levelThoiGianReducer = (state = -1, action) => {
    if (action.type === 'LEVEL_THOIGIAN') return state + 1;
    return state;
};

const levelRutGon3Reducer = (state = 0, action) => {
    if (action.type === 'LEVEL_RUTGON3') return state + 1;
    return state;
};
const levelRutGon6Reducer = (state = 0, action) => {
    if (action.type === 'LEVEL_RUTGON6') return state + 1;
    return state;
};
const levelRutGon9Reducer = (state = 0, action) => {
    if (action.type === 'LEVEL_RUTGON9') return state + 1;
    return state;
};

const dataSourceReducer = (state = [], action) => {
    if (action.type === 'FETCH_SUCCESS') return action.dataSource;
    return state;
};
const errorReducer = (state = false, action) => {
    if (action.type === 'FETCH_ERROR') return !state;
    return state;
};
const choosingAReducer = (state = false, action) => {
    if (action.type === 'IS_CHOOSING_A') return !state;
    if (action.type === 'IS_CHOOSING_B') return false;
    if (action.type === 'IS_CHOOSING_C') return false;
    if (action.type === 'IS_CHOOSING_D') return false;
    if (action.type === 'IS_CONTINUE') return false;
    if (action.type === 'IS_FINISH') return false;
    return state;
};
const choosingBReducer = (state = false, action) => {
    if (action.type === 'IS_CHOOSING_A') return false;
    if (action.type === 'IS_CHOOSING_B') return !state;
    if (action.type === 'IS_CHOOSING_C') return false;
    if (action.type === 'IS_CHOOSING_D') return false;
    if (action.type === 'IS_CONTINUE') return false;
    if (action.type === 'IS_FINISH') return false;
    return state;
};
const choosingCReducer = (state = false, action) => {
    if (action.type === 'IS_CHOOSING_A') return false;
    if (action.type === 'IS_CHOOSING_B') return false;
    if (action.type === 'IS_CHOOSING_C') return !state;
    if (action.type === 'IS_CHOOSING_D') return false;
    if (action.type === 'IS_CONTINUE') return false;
    if (action.type === 'IS_FINISH') return false;
    return state;
};
const choosingDReducer = (state = false, action) => {
    if (action.type === 'IS_CHOOSING_A') return false;
    if (action.type === 'IS_CHOOSING_B') return false;
    if (action.type === 'IS_CHOOSING_C') return false;
    if (action.type === 'IS_CHOOSING_D') return !state;
    if (action.type === 'IS_CONTINUE') return false;
    if (action.type === 'IS_FINISH') return false;
    return state;
};
const choosedReducer = (state = null, action) => {
    if (action.type === 'IS_CHOOSING_A') return action.Choosed;
    if (action.type === 'IS_CHOOSING_B') return action.Choosed;
    if (action.type === 'IS_CHOOSING_C') return action.Choosed;
    if (action.type === 'IS_CHOOSING_D') return action.Choosed;
    if (action.type === 'IS_CONTINUE') return null;
    if (action.type === 'IS_FINISH') return null;
    return state;
};

const checkingReducer = (state = false, action) => {
    if (action.type === 'IS_CHECKING_TRUE') return !state;
    if (action.type === 'IS_CHECKING_FALSE') return !state;
    if (action.type === 'IS_CONTINUE') return false;
    if (action.type === 'IS_FINISH') return false;
    return state;
};

const textTitleReducer = (state = null, action) => {
    if (action.type === 'IS_CHECKING_TRUE') return 'Chính xác';
    if (action.type === 'IS_CHECKING_FALSE') return 'Đáp án đúng:';
    if (action.type === 'IS_CONTINUE') return null;
    if (action.type === 'IS_FINISH') return null;
    return state;
};
const textAnswerReducer = (state = null, action) => {
    if (action.type === 'IS_CHECKING_TRUE') return null;
    if (action.type === 'IS_CHECKING_FALSE') return action.textAnswer;
    if (action.type === 'IS_CONTINUE') return null;
    if (action.type === 'IS_FINISH') return null;
    return state;
};
const backgroundColorCheckingReducer = (state = null, action) => {
    if (action.type === 'IS_CHECKING_TRUE') return '#66FF00';
    if (action.type === 'IS_CHECKING_FALSE') return 'red';
    if (action.type === 'IS_CONTINUE') return null;
    if (action.type === 'IS_FINISH') return null;
    return state;
};
const sttReducer = (state = 1, action) => {
    if (action.type === 'IS_CONTINUE') return state+1;
    if (action.type === 'IS_FINISH') return 1;
    return state;
};
const scoreReducer = (state = 0, action) => {
    if (action.type === 'IS_SCORE') return state+1;
    if (action.type === 'IS_FINISH') return 0;
    return state;
};
const score1Reducer = (state = null, action) => {
    if (action.type === 'IS_SCORE_1') return action.Score1;
    if (action.type === 'IS_FINISH') return null;
    return state;
};
const score2Reducer = (state = null, action) => {
    if (action.type === 'IS_SCORE_2') return action.Score2;
    if (action.type === 'IS_FINISH') return null;
    return state;
};
const score3Reducer = (state = null, action) => {
    if (action.type === 'IS_SCORE_3') return action.Score3;
    if (action.type === 'IS_FINISH') return null;
    return state;
};

const reducer = combineReducers({
    arrTitles: arrTitlesReducer,
    levelCB1: levelCB1Reducer,
    levelCB2: levelCB2Reducer,
    levelCumTu: levelCumTuReducer,
    levelDongVat: levelDongVatReducer,
    levelQuanAo: levelQuanAoReducer,
    levelSoNhieu: levelSoNhieuReducer,
    levelMauSac: levelMauSacReducer,
    levelGiaDinh: levelGiaDinhReducer,
    levelThoiGian: levelThoiGianReducer,

    levelRutGon3: levelRutGon3Reducer,
    levelRutGon6: levelRutGon6Reducer,
    levelRutGon9: levelRutGon9Reducer,

    dataSource: dataSourceReducer,
    error: errorReducer,

    ChoosingA: choosingAReducer,
    ChoosingB: choosingBReducer,
    ChoosingC: choosingCReducer,
    ChoosingD: choosingDReducer,
    Choosed: choosedReducer,

    Checking: checkingReducer,
    textTitle: textTitleReducer,
    textAnswer: textAnswerReducer,
    backgroundColorChecking: backgroundColorCheckingReducer,

    stt: sttReducer,
    Score: scoreReducer,
    Score1: score1Reducer,
    Score2: score2Reducer,
    Score3: score3Reducer,

});

const store = createStore(reducer);

export default store;