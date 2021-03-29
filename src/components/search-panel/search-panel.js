import React, { Component } from "react";
import "./search-panel.css";

class SearchPanel extends Component {

  state = { term: "" };

  handleChange = (e) => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onSearchChange(term);
  };

  render() {
    const { term } = this.state;

    return (
      <div className="search-panel-form">
        <input 
          className="search-panel-input" 
          placeholder="type to search" 
          onChange={this.handleChange}
          value={term}
        />
      </div>
    )
  }
}

export default SearchPanel;