import React from 'react';

const SubmitButton = ({ onClick }) => {
    return (
        <button
            className="btn waves-effect waves-light"
            type="submit" 
            name="action"
            onClick={onClick}
            style={{ marginTop: '1rem', backgroundColor: '#008080' }}>
            <i className="material-icons">arrow_forward</i>
        </button>
    )
}

export default SubmitButton;