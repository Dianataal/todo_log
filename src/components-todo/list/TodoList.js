import React from "react";
import TodoItem from "../TodoItem";
import './TodoList.css'

const TodoList = (props) => {
  if (props.filteredTodos.length === 0) {
    return <p className='todos-list__fallback'>No todos found</p>
  }

  return (
    <ul className='todos-list'>
      {props.filteredTodos.map((todo) => (
        <TodoItem
          key={todo.id} // Ensure each item has a unique key
          id={todo.id}
          title={todo.title}
          priority={todo.priority}
          date={todo.date}
        />
      ))}
    </ul>
  )
}

export default TodoList;

