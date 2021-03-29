import React from "react";

import TodoListItem from "../todo-list-item";
import "./todo-list.css";

const TodoList = (props) => {

  const { todos, deleteItem, onToggleImportant, onToggleDone } = props;
  
  const elements = todos.map((item) => {
    const { id, ...todo } = item;
    return (
      <li className="todo-list" key={id}>
        <TodoListItem
          {...todo}
          deleteItem={() => deleteItem(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleDone={() => onToggleDone(id)}
        />
      </li>
    );
  });

  return <ul className="todo-list-wrapper">{elements}</ul>;
};

export default TodoList;