import React from "react";
import "./app-header.css";

const AppHeader = ({ toDo, done }) => {
  return (
    <div className="header">
      <h1 className="title">Todo List</h1>
      <h2 className="subtitle">{toDo} more to do, {done} done</h2>
    </div>
  );
};

export default AppHeader;