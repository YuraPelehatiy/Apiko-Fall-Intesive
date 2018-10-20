import React from 'react';
import style from './Header.module.css';
import T from 'prop-types';

const Header = ({inputValue, onChangeInputValue, onClick, inputRef}) => {
    return (
        <div className={style.header}>
            <input 
                ref = {inputRef}
                type = "text"
                value = {inputValue}
                onChange = {(e) => onChangeInputValue(e.target.value)}
            />
            <button onClick = {onClick}>Add Todo</button>
        </div>
    );
} 

Header.propTypes = {
    inputValue: T.string.isRequired, 
    onChangeInputValue: T.func.isRequired, 
    onClick: T.func.isRequired
}

export default Header;