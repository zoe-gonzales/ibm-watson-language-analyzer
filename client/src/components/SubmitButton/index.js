import React from 'react';

const SubmitButton = ({ onClick }) => {
    return (
        <button
            className="btn waves-effect waves-light"
            type="submit" 
            name="action"
            onClick={onClick}>
            <i className="material-icons right">send</i>
        </button>
    )
}

export default SubmitButton;