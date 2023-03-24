import React, {useState} from "react";
import './App.css';
import AddUser from "./components-user/Users/AddUser";
import UsersList from "./components-user/Users/UsersList";

import Todo from "./components-todo/Todo";
import NewTodo from "./components-todo/new/NewTodo";
function App() {
  const [users, setUsers] = useState([])

  const onAddUserHandler = (username, age) => {
    setUsers((prevUsers) => {
      return [
        ...prevUsers,
        {
          id: Math.random().toString(),
          name: username,
          age: age
        }
      ]
    })
  }

  return (
      <div>
        <AddUser onAddUser={onAddUserHandler}/>
        <UsersList users={users}/>
      </div>
  );
}
const DUMMY_TODOS = [
  {
    id: 'e1',
    date: new Date(2023, 0, 10),
    title:'Hinded korda',
    rank: 'high'
  }
  ]
const Apptodo = () => {
  const [todos, setTodos] = useState
  (DUMMY_TODOS)

  const addTodohandler = (todo) => {
    console.log('In App.js')
    setTodos((previousTodos ) => {
      return [todo, ...previousTodos]
    })
  }
  console.log(todos)

  return (
      <div className="Apptodo">
        <NewTodo onAddExpense={addTodohandler}></NewTodo>
        <Todo expenses={todos}></Todo>
      </div>
  );
}

export default App;
