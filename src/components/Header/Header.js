import React from 'react';
import style from './Header.module.css';

const Header = ({inputValue, onChangeInputValue, onClick, _ref}) => {
    return (
        <div className={style.header}>
            <input 
                ref = {_ref}
                type = "text"
                value = {inputValue}
                onChange = {(e) => onChangeInputValue(e.target.value)}
            />
            <button onClick = {onClick}>Add Todo</button>
        </div>
    );
} 

export default Header;