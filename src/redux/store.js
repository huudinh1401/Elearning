import { createStore } from 'redux';

const defaultState = {
    dataSource: [],
    error: false,
    Choosed: null
};

const reducer = (state = defaultState, action) =>{
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return { 
                dataSource: action.dataSource,
                error: false,
                Choosed: null
            };
        case 'FETCH_ERROR':
            return { 
                dataSource: [],
                error: true,
                Choosed: null
            };
        case 'IS_CHOOSING':
            return { 
                dataSource: [],
                error: true,
                Choosed: action.Choosed
            };
        default:
            return state;
    }
}

const store = createStore(reducer);
export default store;