import { combineReducers } from 'redux';

import arrTitlesReducer from './arrTitlesReducer';

import levelCB1Reducer from './levelCB1Reducer';
import levelCB2Reducer from './levelCB2Reducer';
import levelCumTuReducer from './levelCumTuReducer';
import levelDongVatReducer from './levelDongVatReducer';
import levelQuanAoReducer from './levelQuanAoReducer';
import levelSoNhieuReducer from './levelSoNhieuReducer';
import levelMauSacReducer from './levelMauSacReducer';
import levelGiaDinhReducer from './levelGiaDinhReducer';
import levelThoiGianReducer from './levelThoiGianReducer';

import levelRutGon3Reducer from './levelRutGon3Reducer';
import levelRutGon6Reducer from './levelRutGon6Reducer';
import levelRutGon9Reducer from './levelRutGon9Reducer';

import dataSourceReducer from './dataSourceReducer';
import errorReducer from './errorReducer';

import choosingAReducer from './choosingAReducer';
import choosingBReducer from './choosingBReducer';
import choosingCReducer from './choosingCReducer';
import choosingDReducer from './choosingDReducer';
import choosedReducer from './choosedReducer';

import checkingReducer from './checkingReducer';
import textTitleReducer from './textTitleReducer';
import textAnswerReducer from './textAnswerReducer';
import backgroundColorCheckingReducer from './backgroundColorCheckingReducer';

import sttReducer from './sttReducer';
import scoreReducer from './scoreReducer';
import score1Reducer from './score1Reducer';
import score2Reducer from './score2Reducer';
import score3Reducer from './score3Reducer';


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

export default reducer;