export const GetBucketRequest = "GET_BUCKETS_REQUEST";
export const GetBucketError = "GET_BUCKETS_ERROR";
export const GetBucketSuccess = "GET_BUCKET_SUCCESS";

export const AddBucketRequest = "ADD_BUCKETS_REQUEST";
export const AddBucketError = "ADD_BUCKETS_ERROR";
export const AddBucketSuccess = "ADD_BUCKET_SUCCESS";

export function addBucketAction(bucketName) {
    return {
        type: AddBucketRequest,
        name: bucketName,
    }
}

export function getBucketRequestAction() {
    return { type: GetBucketRequest }
}

export function getBucketSuccessAction(buckets) {
    return { type: GetBucketSuccess, buckets }
}

export function addBucketSuccessAction(bucket) {
    return { type: AddBucketSuccess, bucket }
}



export const GetBucketTodoRequest = "GET_BUCKET_TODOS_REQUEST";
export const GetBucketTodoError = "GET_BUCKET_TODOS_ERROR";
export const GetBucketTodoSuccess = "GET_BUCKET_TODOS_SUCCESS";

export const AddTodoRequest = "ADD_TODO_REQUEST";
export const AddTodoError = "ADD_TODO_ERROR";
export const AddTodoSuccess = "ADD_TODO_SUCCESS";


export const ToggleTodoRequest = "TOGGLE_TODO_REQUEST";
export const ToggleTodoError = "TOGGLE_TODO_ERROR";
export const ToggleTodoSuccess = "TOGGLE_TODO_SUCCESS";

export function addTodoAction(todo) {
    return {
        type: AddTodoRequest,
        todo
    }
}

export function getBucketTodoRequestAction(bucketId) {
    return { type: GetBucketTodoRequest, bucketId }
}

export function getBucketTodoSuccessAction(bucketTodos, bucketId) {
    return { type: GetBucketTodoSuccess, bucketTodos, bucketId }
}

export function addTodoSuccessAction(todo, bucketId) {
    return { type: AddTodoSuccess, todo, bucketId }
}


export function toggleTodoSuccessAction(todo, status) {
    return { type: ToggleTodoSuccess, todo, status }
}

export function toggleTodoRequestAction(todo, todoStatus) {
    return { type: ToggleTodoRequest, todo, todoStatus }
}