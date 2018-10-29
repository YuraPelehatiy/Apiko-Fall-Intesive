import React from 'react';
import classnames from 'classnames/bind';
import s from './TodoInfo.module.css';
import T from 'prop-types';

const cx = classnames.bind(s);

const TodoInfo = ({ match, todos }) => {
    let index = todos.findIndex(i => i.id === Number(match.params.id));
    
    if(index === -1){
        return <h3>Todo is not found</h3>;
    }
    
    let currentTodo = todos[index]

    return (
        <div className = {cx({"item": true, "completed": currentTodo.completed })}>
            <h3 className={s.taskInfoHeader}>Information about Task</h3>
            <div>Task Id: {currentTodo.id}</div>
            <div>Task: {currentTodo.task}</div>
            <div>Created Task: 
                {currentTodo.createdDate 
                    ? currentTodo.createdDate 
                    : ` ${new Date().getDate()}/${new Date().getMonth()}/${new Date().getFullYear()}`
                }
            </div>
            <div>Completed: {currentTodo.completed ? 'Yes' : 'No'}</div>
            <div>{currentTodo.completed ? `Completed Task: ${currentTodo.completedDate} `: ''}</div>
        </div>
    )
}

TodoInfo.propTypes = {
    todos: T.array
}

export default TodoInfo;