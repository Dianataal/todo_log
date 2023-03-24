import React from 'react';
import TodoForm from "./TodoForm";
import "./NewTodo.css";

const NewTodo = (props) => {
    const saveTodoHandler = (enteredTodoData) => {
        const todoData = {
            ...enteredTodoData,
            id: Math.random().toString()
        }
        props.onAddTodo(todoData)
    }

    return (
        <div className='new-todo' >
            <TodoForm onSaveTodoData={saveTodoHandler}></TodoForm>
        </div>
    )
}

export default NewTodo
