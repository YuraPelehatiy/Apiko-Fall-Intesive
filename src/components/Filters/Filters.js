import React from 'react';
import s from './Filters.module.css';

const Filters = ({ filter, handleOnChangeFilter }) => {
    return(
        <div className = {s.filters}>
            <label>
                All
                <input 
                    type="radio"
                    value="all" 
                    name="completed" 
                    checked={filter === "all"}
                    onChange = {(e) => handleOnChangeFilter(e.target.value)}
                />
            </label>
            <label>
                Completed
                <input 
                    type="radio"
                    value="completed" 
                    name="completed" 
                    checked={filter === "completed"}
                    onChange = {(e) => handleOnChangeFilter(e.target.value)}
                />
            </label>
            <label>
                Incompleted
                <input 
                    type="radio" 
                    value="incompleted"
                    name="completed" 
                    checked={filter === "incompleted"}
                    onChange = {(e) => handleOnChangeFilter(e.target.value)}
                />
            </label>
        </div>
    );
}

export default Filters;