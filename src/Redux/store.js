import { applyMiddleware, createStore } from 'redux';
import reducer from './Reducer/index.js';
import createSagaMidleware from 'redux-saga';
import rootSaga from './Saga/index';

const store = {
    store: null,
    getStore: function () {
        return this.store;
    },

    configStore: function () {
        const sagaMiddleWare = createSagaMidleware();
        this.store = createStore(reducer, applyMiddleware(sagaMiddleWare));
        sagaMiddleWare.run(rootSaga)
        return this.store;
    }
}

export default store;