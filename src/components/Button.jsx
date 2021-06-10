import React from 'react';
import './Button.css';

const Button = ({onClick, children, disabled}) => {
    return <button
                onClick={onClick}
                className="button"
                title="adicionar tarefa a lista"
                disabled={disabled}
            >{children}</button>;
}
 
export default Button;