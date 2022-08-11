import React from 'react'

interface IButtonProps {
    label: string;
}

const Button: React.FC<IButtonProps> = (props) => {
    return (
        <button>{props.label}</button>
    );
}

export default Button;