import React, { Component } from "react"
import "./item-add-form.css";

class ItemAddForm extends Component {

  state = { label: "" };

  handleChange = (e) => {
    const label = e.target.value;
    this.setState({ label });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    let { label } = this.state;

    if(!label.trim()) {
      this.setState({ label: "" });
      return false;
    }

    label = label.replace(/\s+/g, " ").trim();

    this.props.addItem(label);
    this.setState({ label: "" });
  }

  render() {
    const { label } = this.state;

    return (
      <form className="item-add-form" onSubmit={this.handleSubmit}>
        <input 
          className="item-add-input" 
          placeholder="what needs to be done"
          onChange={this.handleChange} 
          value={label}
        />
      <button className="item-add-btn">Add Item</button>
    </form>
    )
  }
}

export default ItemAddForm;