import React from 'react';

const DropDown = ({
    name,
    options,
    onChange
}) => {
    return (
        <div>
            <select id={name} onChange={onChange}>
                {options.map(opt => <option value={opt.name} key={opt.id}>{opt.name}</option>)}
            </select>
            <label for={name}>Select...</label>
        </div>
        
    )
}

export default DropDown;