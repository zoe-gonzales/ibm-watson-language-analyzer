import React from 'react';

const DropDown = ({
    name,
    options,
    onChange
}) => {
    return (
        <div>
            <select id={name} onChange={onChange}>
                {options.map(opt => {
                    <option value={opt}>opt</option>
                })}
            </select>
            <label for={name}>Select...</label>
        </div>
        
    )
}

export default DropDown;