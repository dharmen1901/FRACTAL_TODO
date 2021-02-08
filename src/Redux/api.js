import axios from 'axios';

export function fetchBucketsApi() {
    return axios.get('http://localhost:5000/api/bucket')
}

export function fetchBucketTodosApi(bucketId) {
    return axios.get(`http://localhost:5000/api/bucket/${bucketId}`)
}

export function addBucketsApi(bucket) {
    return axios.post('http://localhost:5000/api/bucket', { bucket })
}

export function addTodoApi(bucketId, todo) {
    return axios.post(`http://localhost:5000/api/bucket/${bucketId}/todo`, { todo })
}

export function toggleTodoApi(todoId, todoStatus) {
    return axios.put(`http://localhost:5000/api/bucket/${todoId}/toggleTodoApi`, { todoStatus })
}