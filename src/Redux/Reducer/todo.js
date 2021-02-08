import * as actions from '../action';

export default function (state = {
    data: {}
}, action) {
    switch (action.type) {
        case actions.GetBucketTodoSuccess:
            {
                return {
                    data: Object.assign({}, state.data, {
                        [action.bucketId]: action.bucketTodos
                    })
                }
            }
        case actions.GetBucketTodoError:
            { return Object.assign({}, state, { error: true }) }
        case actions.AddTodoSuccess:
            {
                let todoBucket = [...state.data[action.bucketId], action.todo]
                return {
                    data: Object.assign({}, state.data, {
                        [action.bucketId]: todoBucket
                    })
                }
            }
        case actions.ToggleTodoSuccess:
            {
                let todoBucket = [...state.data[action.todo.BUCKET_ID]]

                let updatedBucket = todoBucket.map(_ => {
                    if (_.ID == action.todo.ID) {
                        let newTODO = { ..._ }
                        newTODO.STUTUS = action.status ? 1 : 0
                        return newTODO;
                    }
                    return _;
                })
                return {
                    data: Object.assign({}, state.data, {
                        [action.todo.BUCKET_ID]: updatedBucket
                    })
                }
            }
        default:
            return state;
    }
}