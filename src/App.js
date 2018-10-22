import React, { Component } from 'react';
import s from './App.module.css';
import { Route, Link, Redirect, Switch } from 'react-router-dom';
import TodoApp from './components/TodoApp/TodoApp';
import About from './components/About/About';
import Help from './components/Help/Help';

class App extends Component {
  render() {
    return (
      <div> 
        <div className={s.navigation}>
          <Link className={s.links} to="/todo">Todo List</Link>
          <Link className={s.links} to="/about">About</Link>
          <Link className={s.links} to="/help">Help</Link>
          <hr/>
        </div>
        <div className = {s.App}>
          <Switch>
            <Redirect exact from = "/" to = "/todo" />
            <Route path = "/todo" component = {TodoApp}/>
            <Route path = "/about" component = {About}/>
            <Route path = "/help" component = {Help}/>
            <Route render = {() => <h3>Page not found</h3>}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
