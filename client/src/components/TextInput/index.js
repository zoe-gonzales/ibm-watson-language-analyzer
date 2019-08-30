import React from 'react';

const TextInput = ({
    name,
    placeholder,
    onChange
}) => {
    return (
        <div>
            <label htmlFor={name}>{placeholder}</label>
            <textarea id={name} className="materialize-textarea" onChange={onChange}></textarea>
        </div>
    )
}

export default TextInput;