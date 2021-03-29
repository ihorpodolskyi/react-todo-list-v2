import React, { Component } from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemStatusFilter from "../item-status-filter";
import ItemAddForm from "../item-add-form";

import "./app.css";

class App extends Component {
  id = 1;

  state = {
    todoData: [
      this.createTodoItem("Drink Coffee"),
      this.createTodoItem("Make Awesome App"),
      this.createTodoItem("Learn React"),
    ],
    term: "",
    filter: "all",
  };

  createTodoItem(label, important = false, done = false) {
    return { label, important, done, id: this.id++ };
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const newTodoData = todoData.filter((item) => item.id !== id);
      return { todoData: newTodoData };
    });
  };

  addItem = (label) => {
    const todoItem = this.createTodoItem(label);

    this.setState(({ todoData }) => {
      const newTodoData = [...todoData, todoItem];
      return { todoData: newTodoData };
    });
  };

  toggleProperty(arr, id, propName) {
    const idx = arr.findIndex((item) => item.id === id);

    const todoItem = {
      ...arr[idx],
      [propName]: !arr[idx][propName],
    };

    return [...arr.slice(0, idx), todoItem, ...arr.slice(idx + 1)];
  }

  onToggleImportant = (id) => {
    this.setState(({ todoData }) => {
      return { todoData: this.toggleProperty(todoData, id, "important") };
    });
  };

  onToggleDone = (id) => {
    this.setState(({ todoData }) => {
      return { todoData: this.toggleProperty(todoData, id, "done") };
    });
  };

  onSearchChange = (term) => {
    this.setState({ term });
  };

  searchItems = (arr, term) => {
    return arr.filter((item) =>
      item.label.toLowerCase().includes(term.toLowerCase())
    );
  };

  onFilterChange = (filter) => {
    this.setState({ filter });
  };

  filterItems = (arr, filter) => {
    switch (filter) {
      case "all":
        return arr;
      case "active":
        return arr.filter((item) => !item.done);
      case "done":
        return arr.filter((item) => item.done);
      default:
        return arr;
    }
  };

  render() {
    const { todoData, term, filter } = this.state;

    const visibleItems = this.filterItems(
      this.searchItems(todoData, term),
      filter
    );

    const doneCount = todoData.filter((item) => item.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className="app">
        <div className="container">
          <AppHeader toDo={todoCount} done={doneCount} />

          <div className="search-panel">
            <SearchPanel onSearchChange={this.onSearchChange} />
            <ItemStatusFilter
              onFilterChange={this.onFilterChange}
              filter={filter}
            />
          </div>

          <TodoList
            todos={visibleItems}
            deleteItem={this.deleteItem}
            onToggleImportant={this.onToggleImportant}
            onToggleDone={this.onToggleDone}
          />
          <ItemAddForm addItem={this.addItem} />
        </div>
      </div>
    );
  }
}

export default App;
