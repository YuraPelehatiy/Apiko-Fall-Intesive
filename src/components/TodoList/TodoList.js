import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import s from './TodoList.module.css';
import T from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import TodoInfo from '../TodoInfo/TodoInfo'

const TodoList = ({todos, onClickCompleteTodo, onClickRemoveTodo, match}) => {
    return(
        <>
            <ul className = {s.list}>
                {todos.map(item  => {
                    if(match.params.filter === "all"){
                        return <TodoItem key = {item.id} {...item} onClickComplete = {onClickCompleteTodo} onClickRemove = {onClickRemoveTodo} match={match}/>;
                    } else if (match.params.filter === "completed" && item.completed){
                        return <TodoItem key = {item.id} {...item} onClickComplete = {onClickCompleteTodo} onClickRemove = {onClickRemoveTodo} match={match}/>;
                    }  else if (match.params.filter === "incompleted" && !item.completed) {
                        return <TodoItem key = {item.id} {...item} onClickComplete = {onClickCompleteTodo} onClickRemove = {onClickRemoveTodo} match={match}/>;
                    } 
                })}
            </ul>
            <Switch>
                <Route path = {`${match.path}/:id`} render = {props => <TodoInfo {...props} todos = {todos} />} />
                <Route render = {() => <h3>Please select a Todo or create it if you dont do it yet</h3>}/>
            </Switch>
        </>
    );
}

TodoList.propTypes = {
    todos: T.array, 
    onClickCompleteTodo: T.func.isRequired, 
    onClickRemoveTodo: T.func.isRequired, 
}

export default TodoList;