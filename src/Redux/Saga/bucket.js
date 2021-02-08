import { takeLatest, call, put } from 'redux-saga/effects';
import * as actions from '../action';
import { fetchBucketsApi, addBucketsApi } from '../api';

function* fetchBuckets() {
    try {
        const bucketData = yield call(fetchBucketsApi);
        yield put(actions.getBucketSuccessAction(bucketData.data));
    }
    catch (e) {
        console.log(e)
        yield put({ type: actions.GetBucketError });
    }
}

function* addBucket(action) {
    try {
        const bucketData = yield call(addBucketsApi, { name: action.name });
        yield put(actions.addBucketSuccessAction(bucketData.data.bucket));
    }
    catch (e) {
        console.log(e)
        yield put({ type: actions.AddBucketError });
    }
}

function* sagaBucket() {
    yield takeLatest(actions.GetBucketRequest, fetchBuckets)
    yield takeLatest(actions.AddBucketRequest, addBucket)
}

export default sagaBucket;

