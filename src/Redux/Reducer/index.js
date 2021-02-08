import { combineReducers } from 'redux';
import bucketReducer from './bucket.js'
import todoReducer from './todo';

const reducer = combineReducers({
    bucketReducer,
    todoReducer
})

export default reducer;