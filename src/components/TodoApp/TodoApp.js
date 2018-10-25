import React, { Component } from 'react';
import Header from '../Header/Header';
import TodoList from '../TodoList/TodoList';
import Filters from '../Filters/Filters';
import { Switch, Route, Redirect } from 'react-router-dom';

import s from './TodoApp.module.css';

import todoCreator from '../../utils/todoCreator';

class TodoApp extends Component {
  constructor(props){
    super(props);

    this.state = {
      inputValue: '',
      todos: [],
    };

    this.inputRef = React.createRef();

    this.onChangeInputValue = this.onChangeInputValue.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleOnClickCompleteTodo = this.handleOnClickCompleteTodo.bind(this);
    this.handleOnClickRemoveTodo = this.handleOnClickRemoveTodo.bind(this);
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
    });

    this.inputRef.current.focus();
  }

  handleOnClickCompleteTodo(id){
    let index = this.state.todos.findIndex((i => i.id === id));
    
    if(index === -1){
      return;
    }

    let todos = [...this.state.todos];
    todos[index].completed = !todos[index].completed;

    //Add when task was completed
    todos[index].completedDate = `${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`;

    this.setState({ todos });
  }

  handleOnClickRemoveTodo(id){
    let index = this.state.todos.findIndex((i => i.id === id));
    
    if(index === -1){
      return;
    }

    let todos = [...this.state.todos];
    todos.splice(index, 1);
    this.setState({ todos });
  }

  countCompletedTodos(){
    return this.state.todos.filter(i => i.completed === true).length;
  }

  saveTodosInLocalStorage(){
    localStorage.setItem('todos', JSON.stringify(this.state.todos));
  }

  componentDidMount(){
    if(localStorage){
      let myStotage = localStorage.getItem('todos');
      if(myStotage){
        myStotage = JSON.parse(myStotage);
        this.setState({ todos: myStotage })
      }
    }
  }

  componentDidUpdate(){
    this.saveTodosInLocalStorage();
  }
  
  render() {
    const { match } = this.props;

    return (
      <div className={s.App}>
        <h1>ToDo List</h1>
        <Header
          inputRef = {this.inputRef}
          inputValue = {this.state.inputValue}
          onChangeInputValue = {this.onChangeInputValue}
          onClick = {this.handleAddItem} 
        />
        <Switch>
          <Route path = {`${match.path}/:filter(all|completed|incompleted)`} render={
            props => 
            <TodoList 
              {...props}
              todos = {this.state.todos}
              onClickCompleteTodo = {this.handleOnClickCompleteTodo}
              onClickRemoveTodo = {this.handleOnClickRemoveTodo}
            />
            }
          />
          <Redirect exact from = {`${match.url}/`} to = {`${match.url}/all`} />
          <Route render = {() => <h3>Please select a correct filter</h3>  }/>
        </Switch>
       
        <div>
          <div>Total: {this.state.todos.length}</div>
          <div>Completed: {this.countCompletedTodos()}</div>
        </div>
        <Filters 
          match = {match}
        /> 
      </div>
    );
  }
}

export default TodoApp;
