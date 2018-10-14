import React from 'react';
import classnames from 'classnames/bind';
import s from './TodoItem.module.css';

const cx = classnames.bind(s)

const TodoItem = ({id, task, completed, onClickComplete, onClickRemove }) => {
    return(
        <li className = {cx({"item": true, "completed": completed })}>
            <div>{task}</div>
            <div>
                <button 
                    className = {cx({"complete-btn": true})}
                    onClick = {() => onClickComplete(id)}
                >
                    {completed ? 'Incomplete' : 'Complete'}
                </button>
                <button
                    className = {cx({"remove-btn": true})} 
                    onClick = {() => onClickRemove(id)}
                >
                    Remove
                </button>
            </div>
            
        </li>
    );
}

export default TodoItem;