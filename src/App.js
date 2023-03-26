import React, { useState } from "react";
import "./App.css";
import AddUser from "./components-user/Users/AddUser";
import UsersList from "./components-user/Users/UsersList";

import Todo from "./components-todo/Todo";
import NewTodo from "./components-todo/new/NewTodo";

function App() {
  const [users, setUsers] = useState([]);

  const onAddUserHandler = (username, age) => {
    setUsers((prevUsers) => {
      return [
        ...prevUsers,
        {
          id: Math.random().toString(),
          name: username,
          age: age,
        },
      ];
    });
  };

  const DUMMY_TODOS = [
    {
      id: "e1",
      date: new Date(2023, 0, 10),
      title: "Homework",
      priority: "high",
    },
  ];

  const addNewTodoHandler = (NewTodo) => {
    console.log(NewTodo);
  };

  return (
      <div>
        <AddUser onAddUser={onAddUserHandler} />
        <UsersList users={users} />
        <NewTodo onAddNewTodo={addNewTodoHandler} />
        <Todo todos={DUMMY_TODOS} />
      </div>
  );
}

export default App;