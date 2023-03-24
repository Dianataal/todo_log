import React from "react";
import TodoItem from "../components-todo/TodoItem";
import './TodoList.css'

const TodoList = (props) => {
    if (props.filteredTodos.length === 0) {
        return <p className='todos-list__fallback'>No todos found</p>
    }

    return (
        <ul className='todos-list'>
            {
                props.filteredTodos.map((todo) => {
                    return <TodoItem
                        id={todo.id}
                        title={todo.title}
                        priority={todo.amount}
                        date={todo.date}
                    ></TodoItem>
                })
            }
        </ul>
    )
}
export default TodoList