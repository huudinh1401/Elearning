
export function getLevelCB1() {
    return { type: 'LEVEL_CB1' };
}
export function getLevelCB2() {
    return { type: 'LEVEL_CB2' };
}
export function getLevelCumTu() {
    return { type: 'LEVEL_CUMTU' };
}
export function LevelDongVat() {
    return { type: 'LEVEL_DONGVAT' };
}
export function LevelQuanAo() {
    return { type: 'LEVEL_QUANAO' };
}
export function LevelLuyenNoi() {
    return { type: 'LEVEL_LUYENNOI' };
}
export function LevelMauSac() {
    return { type: 'LEVEL_MAUSAC' };
}
export function LevelGiaDinh() {
    return { type: 'LEVEL_GIADINH' };
}
export function LevelThoiGian() {
    return { type: 'LEVEL_THOIGIAN' };
}


export function LevelRutGon3() {
    return { type: 'LEVEL_RUTGON3' };
}
export function LevelRutGon6() {
    return { type: 'LEVEL_RUTGON6' };
}
export function LevelRutGon9() {
    return { type: 'LEVEL_RUTGON9' };
}


export function fetchSuccess(dataSource) {
    return { 
        type: 'FETCH_SUCCESS', dataSource
    };
}

export function fetchError() {
    return { type: 'FETCH_ERROR' };
}

export function isChoosingA(Choosed) {
    return { 
        type: 'IS_CHOOSING_A', Choosed
    };
}
export function isChoosingB(Choosed) {
    return { 
        type: 'IS_CHOOSING_B', Choosed
    };
}
export function isChoosingC(Choosed) {
    return { 
        type: 'IS_CHOOSING_C', Choosed
    };
}

export function isChoosingD(Choosed) {
    return { 
        type: 'IS_CHOOSING_D', Choosed
    };
}
export function isChoosingSpeak(Choosed) {
    return { 
        type: 'IS_CHOOSING_SPEAK', Choosed
    };
}

export function isCheckingTrue() {
    return { type: 'IS_CHECKING_TRUE' };
}

export function isCheckingFalse(textAnswer) {
    return { 
        type: 'IS_CHECKING_FALSE', textAnswer
    };
}
export function isCheckingSpeakTrue(textAnswer) {
    return { 
        type: 'IS_CHECKING_SPEAK_TRUE', textAnswer
    };
}
export function isCheckingSpeakFalse(textAnswer) {
    return { 
        type: 'IS_CHECKING_SPEAK_FALSE', textAnswer
    };
}
export function isScore1(Score1) {
    return { 
        type: 'IS_SCORE_1',  Score1
    };
}

export function isScore2(Score2) {
    return { 
        type: 'IS_SCORE_2', Score2
    };
}

export function isScore3(Score3) {
    return { 
        type: 'IS_SCORE_3', Score3
    };
}

export function isScore() {
    return { type: 'IS_SCORE' };
}

export function isContinue() {
    return { type: 'IS_CONTINUE' };
}

export function isFinish() {
    return { type: 'IS_FINISH' };
}

