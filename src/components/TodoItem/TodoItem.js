import React from 'react';
import classnames from 'classnames/bind';
import s from './TodoItem.module.css';
import T from 'prop-types';

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

TodoItem.propTypes = {
    id: T.number.isRequired, 
    task: T.string.isRequired, 
    completed: T.bool.isRequired, 
    onClickComplete: T.func.isRequired, 
    onClickRemove: T.func.isRequired
}

export default TodoItem;