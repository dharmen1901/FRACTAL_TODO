import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getBucketTodoRequestAction, toggleTodoRequestAction, addTodoAction } from './Redux/action'
// import './index.css';
import TodoComponent from './Components/Todo';
import AddTodoComponent from './Components/AddTodo';
import todo from './Redux/Reducer/todo';


function Todo(props) {
    let [addTodoModal, setAddTodoModal] = useState(false);
    let [todoTitle, setTitle] = useState("");
    let [todoDescription, setDescription] = useState("");
    let [priority, setPriority] = useState(1)

    const dispatch = useDispatch()

    let id = parseInt(useParams().id);

    let todos = useSelector(state => state.todoReducer.data[id]);

    useEffect(() => {
        dispatch(getBucketTodoRequestAction(id))
    }, []);

    let addTodo = e => {
        dispatch(addTodoAction({
            title: todoTitle,
            description: todoDescription,
            priority: parseInt(priority),
            bucketId: id
        }))
        setAddTodoModal(false);
        setPriority(1);
        setTitle("");
        setDescription("")
    }

    let toggleTodo = (todo, status) => {
        dispatch(toggleTodoRequestAction(todo, status))
    }

    return (
        <>
            {
                todos && (
                    <>
                        {addTodoModal && <div className='modal'>
                            <AddTodoComponent
                                todoTitle={todoTitle}
                                todoDescription={todoDescription}
                                priority={priority}
                                setPriority={setPriority}
                                setTitle={setTitle}
                                setDescription={setDescription}
                                addTodo={addTodo}
                                setAddTodoModal={setAddTodoModal}
                            />
                        </div>}

                        {/* <h1>{todos.bucket.name}</h1> */}
                        <div className='todo-list'>
                            {todos.map(_ => <TodoComponent todo={_} toggleTodo={() => toggleTodo(_, !_.STUTUS)} />)}
                        </div>
                        <button className='add' onClick={() => setAddTodoModal(true)}>+</button>
                    </>
                )
            }
        </>
    )
}

export default Todo

