import React, { Component } from "react";
import "./item-status-filter.css";

class ItemStatusFilter extends Component {

  buttons = [
    { name: "all", label: "All" },
    { name: "active", label: "Active" },
    { name: "done", label: "Done" },
  ];

  render() {
    const { onFilterChange, filter } = this.props;

    const buttons = this.buttons.map(({ name, label }) => {
      const isActive = filter === name;
      const cls = isActive  ? "btn active" : "btn";

      return (
        <button
          key={name}
          className={cls}
          onClick={() => onFilterChange(name)}
        >
          {label}
        </button>
      );
    });

    return <div className="btn-group">{buttons}</div>;
  }
}

export default ItemStatusFilter;