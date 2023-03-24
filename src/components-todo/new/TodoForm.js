import React, { useState } from 'react';
import "./TodoForm.css";

const TodoForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredPriority, setEnteredPriority] = useState('')
    const [enteredDate, setEnteredDate] = useState('')

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }

    const priorityChangeHandler = (event) => {
        setEnteredPriority(event.target.value)
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        const todoData = {
            title: enteredTitle,
            priority: enteredPriority,
            date: new Date (enteredDate)
        }
        props.onSaveTodoData(todoData)
        setEnteredTitle('')
        setEnteredPriority('')
        setEnteredDate('')
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-todo__control input">
                <div className='new-todo__control'>
                    <label>Title</label>
                    <input id='title' type='text' onChange={titleChangeHandler} value={enteredTitle} />
                </div>
                <div className='new-todo__control'>
                    <label>Priority</label>
                    <select value={enteredPriority} onChange={priorityChangeHandler}>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </div>
                <div className='new-todo__control'>
                    <label>Date</label>
                    <input type = 'date' min='2023-01-08' max='2023-12-31' onChange={dateChangeHandler} value={enteredDate}/>
                </div>
            </div>
            <div className='new-todo__actions'>
                <button type = 'submit'>Add Task</button>
            </div>
        </form>
    )
}
export default TodoForm
