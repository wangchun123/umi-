import * as cardsService from './service';

export default {
    namespace: 'suspiciousEvents',
    state: {
        cardsList: [],
    },
    effects: {
        *addOne({ payload }, { call, put }) {
            const rsp = yield call(cardsService.queryList, payload);
            console.log('rsp',rsp);
            yield put({ 
                type: 'saveList',
                payload:rsp
             });
        },
    },
    reducers: {
        saveList(state, { payload:{data} }) {
            console.log('payload',data);
            return {
                ...state,
                data,
            }
        },
    },
};
