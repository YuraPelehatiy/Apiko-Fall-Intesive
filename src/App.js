import React, { Component } from 'react';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';
import Filters from './components/Filters/Filters';

import s from './App.module.css';

import todoCreator from './utils/todoCreator';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      inputValue: '',
      todos: [],
      filter: 'all'
    };

    this._ref = React.createRef();

    this.onChangeInputValue = this.onChangeInputValue.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleOnClickCompleteTodo = this.handleOnClickCompleteTodo.bind(this);
    this.handleOnClickRemoveTodo = this.handleOnClickRemoveTodo.bind(this);
    this.handleOnChangeFilter = this.handleOnChangeFilter.bind(this);
  }

  onChangeInputValue(inputValue){
    this.setState({ inputValue });
  }

  handleAddItem(){
    const { inputValue } = this.state;
    
    if(!inputValue.trim()){
      return;
    }

    let todo = todoCreator(inputValue);
    let todos = [...this.state.todos];
    todos.unshift(todo);

    this.setState({
      todos,
      inputValue: '',
      }, () => localStorage.setItem('todos', JSON.stringify([...this.state.todos]))
    );

    this._ref.current.focus();
  }

  handleOnClickCompleteTodo(id){
    let index = this.state.todos.findIndex((i => i.id === id));
    
    if(index === -1){
      return;
    }

    let todos = [...this.state.todos];
    todos[index].completed = !todos[index].completed;
    this.setState({ todos }, () =>  localStorage.setItem('todos', JSON.stringify([...this.state.todos])));
  }

  handleOnClickRemoveTodo(id){
    let index = this.state.todos.findIndex((i => i.id === id));
    
    if(index === -1){
      return;
    }

    let todos = [...this.state.todos];
    todos.splice(index, 1);
    this.setState({ todos }, () =>  localStorage.setItem('todos', JSON.stringify([...this.state.todos])));
  }

  countCompletedTodos(){
    return this.state.todos.filter(i => i.completed === true).length;
  }

  handleOnChangeFilter(filter){
    this.setState({ filter });
  }

  componentDidMount(){
    let myStotage = JSON.parse(localStorage.getItem('todos'));
    if(myStotage){
      this.setState({ todos: myStotage })
    }
  }

  render() {
    return (
      <div className={s.App}>
        <h1>ToDo List</h1>
        <Header
          inputRef = {this._ref}
          inputValue = {this.state.inputValue}
          onChangeInputValue = {this.onChangeInputValue}
          onClick = {this.handleAddItem} 
        />
        <TodoList 
          filter = {this.state.filter}
          todos = {this.state.todos}
          onClickCompleteTodo = {this.handleOnClickCompleteTodo}
          onClickRemoveTodo = {this.handleOnClickRemoveTodo}
        />
        <div>
          <div>Total: {this.state.todos.length}</div>
          <div>Completed: {this.countCompletedTodos()}</div>
        </div>
        <Filters 
          filter = {this.state.filter}
          handleOnChangeFilter = {this.handleOnChangeFilter}
        /> 
      </div>
    );
  }
}

export default App;
