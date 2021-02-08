import * as actions from '../action';

export default function bucketReducer(state = {
    loading: true,
    data: null
}, action) {
    switch (action.type) {
        case actions.GetBucketSuccess:
            return { data: action.buckets, loading: false }
        case actions.GetBucketError:
            return { data: null, loading: false, error: true }
        case actions.AddBucketSuccess:
            return Object.assign({}, state, {
                data: [...state.data, action.bucket]
            })
        default:
            return state;
    }
}