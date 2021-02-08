import { fork, spawn } from 'redux-saga/effects'
import bucketSaga from './bucket';
import todoSaga from './todo';

export default function* () {
    yield spawn(todoSaga)
    yield spawn(bucketSaga)
}