import React from 'react';

const TextInput = ({
    name,
    placeholder,
    onChange
}) => {
    return (
        <div>
            <textarea id={name} className="materialize-textarea" onChange={onChange}></textarea>
            <label for={name}>{placeholder}</label>
        </div>
    )
}

export default TextInput;