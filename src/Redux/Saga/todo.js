import { takeLatest, call, put } from 'redux-saga/effects';
import * as actions from '../action';
import { fetchBucketTodosApi, addTodoApi, toggleTodoApi } from '../api';

function* fetchBucketTodos(action) {
    try {
        const bucketData = yield call(fetchBucketTodosApi, action.bucketId);
        yield put(actions.getBucketTodoSuccessAction(bucketData.data, action.bucketId));
    }
    catch (e) {
        console.log(e)
        yield put({ type: actions.GetBucketTodoError });
    }
}

function* addTodo(action) {
    try {
        const todoData = yield call(addTodoApi, action.todo.bucketId, action.todo);
        yield put(actions.addTodoSuccessAction(todoData.data.todo, action.todo.bucketId));
    }
    catch (e) {
        console.log(e)
        yield put({ type: actions.AddTodoError });
    }
}

function* toggleTodo(action) {
    try {
        const todoData = yield call(toggleTodoApi, action.todo.ID, action.todoStatus);
        yield put(actions.toggleTodoSuccessAction(action.todo, action.todoStatus));
    }
    catch (e) {
        console.log(e)
        yield put({ type: actions.ToggleTodoError });
    }
}

function* sagaBucket() {
    yield takeLatest(actions.GetBucketTodoRequest, fetchBucketTodos)
    yield takeLatest(actions.AddTodoRequest, addTodo)
    yield takeLatest(actions.ToggleTodoRequest, toggleTodo)
}

export default sagaBucket;

