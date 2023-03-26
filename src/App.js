import React, { useState } from "react";
import "./App.css";
import AddUser from "./components-user/Users/AddUser";
import UsersList from "./components-user/Users/UsersList";

import Todo from "./components-todo/Todo";
import NewTodo from "./components-todo/new/NewTodo";

const DUMMY_TODOS = [
  {
    id: 1,
    date: new Date(2023, 3, 22),
    title: "React task",
    priority: "high",
  },
  {
    id: 2,
    date: new Date(2023, 3, 24),
    title: "Client project",
    priority: "high",
  }
];

const App = () => {
  const [users, setUsers] = useState([]);
  const [listItems, setListItems] = useState(DUMMY_TODOS);

  const addListItemHandler = (listItemData) => {
    setListItems((previousListItems) => {
      return [listItemData, ...previousListItems];
    });
  };

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

  return (
      <div>
        <AddUser onAddUser={onAddUserHandler} />
        <UsersList users={users} />
        <NewTodo onAddNewTodo={addListItemHandler} />
        <Todo todos={listItems} />
      </div>
  );
};

export default App;