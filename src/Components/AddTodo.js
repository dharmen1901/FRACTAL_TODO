import React from 'react';

export default function (props) {
    return (
        <div className="add-todo">
            <input placeholder="title" value={props.todoTitle} onChange={_ => props.setTitle(_.target.value)} />
            <input placeholder="description" value={props.todoDescription} onChange={_ => props.setDescription(_.target.value)} />
            <input onChange={_ => props.setPriority(_.target.value)} id="high" type="radio" value={1} name="priority" checked={props.priority == 1} />
            <label htmlFor="high">High</label>
            <input onChange={_ => props.setPriority(_.target.value)} id="medium" type="radio" value={2} name="priority" checked={props.priority == 2} />
            <label htmlFor="medium">Medium</label>
            <input onChange={_ => props.setPriority(_.target.value)} id="low" type="radio" value={3} name="priority" checked={props.priority == 3} />
            <label htmlFor="low">Low</label>
            <button onClick={props.addTodo}>Add</button>
            <button onClick={() => props.setAddTodoModal(false)}>CLOSE</button>
        </div>
    )
}