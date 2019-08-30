import React from 'react';

const DropDown = ({
    name,
    options,
    onChange
}) => {
    return (
        <div>
            <label htmlFor={name}>Select method</label>
            <select id={name} onChange={onChange} className='browser-default'>
                {options.map(opt => <option value={opt.name} key={opt.id}>{opt.name}</option>)}
            </select>
            
        </div>
        
    )
}

export default DropDown;