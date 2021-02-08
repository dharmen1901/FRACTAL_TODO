import React from 'react';

export default function (props) {

    let getDate = () => {
        let date = new Date(props.todo.CREATED_DATE);
        let day = date.getDate() > 9 ? date.getDate() : "0" + date.getDate();
        let month = date.getMonth() + 1;
        month = month > 9 ? month : "0" + month;
        return day + "/" + month + "/" + date.getFullYear();

    }

    return (
        <div className="todo">
            <div className={props.todo.STUTUS ? "todo-title todo-completed" : "todo-title"}>{props.todo.TITLE}</div>
            <div className='todo-date'>{getDate()}</div>
            <div className='todo-description'>{props.todo.DESCRIPTION}</div>
            <button onClick={props.toggleTodo} >Toggle</button>
        </div>
    )
}