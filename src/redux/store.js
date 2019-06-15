import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducer from './reducer/reducer';

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: [
        'levelCB1', 
        'levelCB2', 
        'levelCumTu', 
        'levelDongVat', 
        'levelQuanAo',
        'levelSoNhieu', 
        'levelMauSac', 
        'levelGiaDinh', 
        'levelThoiGian', 
        'levelRutGon3',
        'levelRutGon6',
        'levelRutGon9',
    ]
};
const pReducer = persistReducer(persistConfig, reducer);

export const store = createStore(pReducer);
export const persistor = persistStore(store);