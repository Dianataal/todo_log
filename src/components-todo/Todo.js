import React, {useState} from "react";
import './Todo.css'
import Card from "./Card";
import TodoFilter from "./list/TodoFilter";
import TodoList from "./list/TodoList";

const Todo = (props) => {
    const [filteredYear, setFilteredYear] = useState('2023')

    console.log('Year data in Todo.js' + filteredYear)

    const filterChangeHandler = (year) => {
        console.log('Filter change handled by Todo.js')
        console.log(year + 'in Todo.js')
        setFilteredYear(year)
    }
    const filteredTodos = props.todos.filter(
        (todo) => {
            return todo.date.getFullYear().toString() === filteredYear
        })

    return (
        <Card className="todos">
            <TodoList filteredTodos = {filteredTodos}></TodoList>
        </Card>
    )
}


export default Todo