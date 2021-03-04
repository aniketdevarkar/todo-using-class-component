import React, { Component } from "react";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      todo: "",
      current: null
    };
  }
  handleTodo = ({ target: { value } }) => {
    console.log(value);
    this.setState({ todo: value });
  };

  addTodo = () => {
    console.log("Add Todo");
    const todos = [...this.state.todos];
    todos.push(this.state.todo);
    this.setState({ todos: todos, todo: "" });
  };

  clearAll = () => {
    this.setState({ todos: [] });
  };
  editTodo = index => {
    this.setState({ current: index, todo: this.state.todos[index] });
  };
  updateTodo = () => {
    const todos = [...this.state.todos];
    todos[this.state.current] = this.state.todo;
    this.setState({ todos: todos, todo: "", current: null });
  };

  deleteTodo = index => {
    const todos = [...this.state.todos];
    todos.splice(index, 1);
    this.setState({ todos: todos });
  };

  render() {
    return (
      <div>
        <br />
        <input type="text" value={this.state.todo} onChange={this.handleTodo} />
        {this.state.current ? (
          <button onClick={this.updateTodo}>Update</button>
        ) : (
          <button onClick={this.addTodo}>Add</button>
        )}
        <button onClick={this.clearAll}>Clear All</button>
        <br />
        <div>
          {this.state.todos.map((todo, index) => {
            return (
              <p key={index}>
                {todo}
                <button onClick={() => this.editTodo(index)}>edit</button>
                <button onClick={() => this.deleteTodo(index)}>delete</button>
              </p>
            );
          })}
        </div>
        <br />
      </div>
    );
  }
}

export default Todo;
