import React from "react";
import "./todo-list-item.css";

const TodoListItem = (props) => {

  const { label, important, done, deleteItem, onToggleImportant, onToggleDone } = props;

  let cls = "todo-list-item";

  if (done && important) cls += " done impotant";
  else if (done) cls += " done";
  else if (important) cls += " impotant";

  return (
    <>
      <span className={cls} onClick={onToggleDone}>
        {label}
      </span>

      <div className="control-btn">
        <button className="common btn-remove" type="button" onClick={deleteItem}>
          <i className="fas fa-trash"></i>
        </button>
        <button className="common btn-important" type="button" onClick={onToggleImportant}>
          <i className="fas fa-exclamation"></i>
        </button>
      </div>
    </>
  );
};

export default TodoListItem;