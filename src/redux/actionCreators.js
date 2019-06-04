//import getTemp from '../api/getTemp';


export function fetchSuccess(dataSource) {
    return { 
        type: 'FETCH_SUCCESS',
        dataSource
    };
}

export function fetchError() {
    return { type: 'FETCH_ERROR' };
}

export function isChoosingA(Choosed) {
    return { 
        type: 'IS_CHOOSING_A',
        Choosed
    };
}
export function isChoosingB(Choosed) {
    return { 
        type: 'IS_CHOOSING_B',
        Choosed
    };
}
export function isChoosingC(Choosed) {
    return { 
        type: 'IS_CHOOSING_C',
        Choosed
    };
}
export function isChoosingD(Choosed) {
    return { 
        type: 'IS_CHOOSING_D',
        Choosed
    };
}
export function isCheckingTrue() {
    return { 
        type: 'IS_CHECKING_TRUE',
    };
}
export function isCheckingFalse(textAnswer) {
    return { 
        type: 'IS_CHECKING_FALSE',
        textAnswer
    };
}
export function isScore1() {
    return { 
        type: 'IS_SCORE_1',
    };
}
export function isScore2() {
    return { 
        type: 'IS_SCORE_2',
    };
}
export function isScore3() {
    return { 
        type: 'IS_SCORE_3',
    };
}
export function isScore() {
    return { 
        type: 'IS_SCORE',

    };
}
export function isContinue() {
    return { 
        type: 'IS_CONTINUE',
    };
}
// export function fetchDataThunk(cityName) {
//     return dispatch => {
//         dispatch(startFetchData());IS_CHECKING
//         getTemp(cityName)
//         .then(temp => dispatch(fetchSuccess(cityName, temp)))
//         .catch(() => dispatch(fetchError()));
//     };
// }
