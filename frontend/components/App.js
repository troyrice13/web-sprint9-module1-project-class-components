import React from 'react';
import Form from './Form';
import TodoList from './TodoList';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      showCompleted: true,
    };
  }

  addTodo = (todoText) => {
    this.setState(prevState => ({
      todos: [...prevState.todos, { id: Date.now(), text: todoText, completed: false }],
    }));
  };

  toggleTodo = (id) => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  toggleShowCompleted = () => {
    this.setState(prevState => ({
      showCompleted: !prevState.showCompleted,
    }));
  };

  render() {
    const filteredTodos = this.state.showCompleted ? this.state.todos : this.state.todos.filter(todo => !todo.completed);

    return (
      <div>
        <Form addTodo={this.addTodo} />
        <button onClick={this.toggleShowCompleted}>
          {this.state.showCompleted ? 'Hide Completed' : 'Show Completed'}
        </button>
        <TodoList todos={filteredTodos} toggleTodo={this.toggleTodo} />
      </div>
    );
  }
}
