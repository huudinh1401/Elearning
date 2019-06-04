import { createStore } from 'redux';

const defaultState = {
    dataSource: [],
    error: false,
    Choosed: null,
    stt: 1,
    ChoosingA: false,
    ChoosingB: false,
    ChoosingC: false,
    ChoosingD: false,
    Checking: false,
    Score: false,
    Score1: false,
    Score2: false,
    Score3: false,
    textTitle: null,
    textAnswer: null,
    backgroundColorChecking: null,

};

const reducer = (state = defaultState, action) =>{
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                ...state,
                dataSource: action.dataSource,
            };
        case 'FETCH_ERROR':
            return { 
                ...state,
                error: true,
            };
        case 'IS_CHOOSING_A':
            return { 
                ...state,
                ChoosingA: true,
                ChoosingB: false,
                ChoosingC: false,
                ChoosingD: false,
                Choosed: action.Choosed,
            };
        case 'IS_CHOOSING_B':
            return { 
                ...state,
                ChoosingA: false,
                ChoosingB: true,
                ChoosingC: false,
                ChoosingD: false,
                Choosed: action.Choosed,
            };
        case 'IS_CHOOSING_C':
            return { 
                ...state,
                ChoosingA: false,
                ChoosingB: false,
                ChoosingC: true,
                ChoosingD: false,
                Choosed: action.Choosed,
            };
        case 'IS_CHOOSING_D':
            return { 
                ...state,
                ChoosingA: false,
                ChoosingB: false,
                ChoosingC: false,
                ChoosingD: true,
                Choosed: action.Choosed,
            };
        case 'IS_CHECKING_TRUE':
            return { 
                ...state,
                Checking: true,
                textTitle: 'Chính xác',
                textAnswer: null,
                backgroundColorChecking: '#66FF00',
            };
        case 'IS_CHECKING_FALSE':
            return { 
                ...state,
                Checking: true,
                textTitle: 'Đáp án đúng:',
                textAnswer: action.textAnswer,
                backgroundColorChecking: 'red',
            };
        case 'IS_SCORE_1':
            return { 
                ...state,
                Score1: true,
            };
        case 'IS_SCORE_2':
            return { 
                ...state,
                Score2: true,
            };
        case 'IS_SCORE_3':
            return { 
                ...state,
                Score3: true,
            };
        case 'IS_SCORE':
            return { 
                ...state,
                Score: true,
            };
        case 'IS_CONTINUE':
            return { 
                ...state,
                ChoosingA: false,
                ChoosingB: false,
                ChoosingC: false,
                ChoosingD: false,
                Checking: false,
                Choosed: null,
                textTitle: null,
                textAnswer: null,
                backgroundColorChecking: null,
                Score:0,
                stt: state.stt + 1,
                // Score1: false,
                // Score2: false,
                // Score3: false,
            };
        default:
            return state;
    }
}

const store = createStore(reducer);
export default store;