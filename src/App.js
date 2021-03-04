import React, { Component } from "react";
import "./style.css";
import Todo from "./Todo";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <h1>My name is {this.props.name}</h1>
        <p>Welcome back to coding</p>
        <p>Count = {this.state.count}</p>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>

        <Todo />
      </div>
    );
  }
}
