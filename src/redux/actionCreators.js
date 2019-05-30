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

export function Choosed(Choosed) {
    return { 
        type: 'IS_CHOOSING',
        Choosed
    };
}
// export function fetchDataThunk(cityName) {
//     return dispatch => {
//         dispatch(startFetchData());
//         getTemp(cityName)
//         .then(temp => dispatch(fetchSuccess(cityName, temp)))
//         .catch(() => dispatch(fetchError()));
//     };
// }
