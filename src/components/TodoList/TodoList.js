import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import s from './TodoList.module.css';

const TodoList = ({todos, onClickCompleteTodo, onClickRemoveTodo, filter}) => {
    return(
        <ul className = {s.list}>
            {todos.map(item  => {
                if(filter === "all"){
                    return <TodoItem key = {item.id} {...item} onClickComplete = {onClickCompleteTodo} onClickRemove = {onClickRemoveTodo} />;
                } else if (filter === "completed" && item.completed){
                    return <TodoItem key = {item.id} {...item} onClickComplete = {onClickCompleteTodo} onClickRemove = {onClickRemoveTodo} />;
                }  else if (filter === "incompleted" && !item.completed) {
                    return <TodoItem key = {item.id} {...item} onClickComplete = {onClickCompleteTodo} onClickRemove = {onClickRemoveTodo} />;
                } 
            })}
        </ul>
    );
}

export default TodoList;