import { useState } from 'react';

const FormAction = cb => {
    const [text, setText] = useState('');
    const [select, setSelect] = useState('');

    const handleInputChange = e => {
        e.persist();
        const { value } = e.target;
        setText(value);
    }

    const handleSelectChange = e => {
        e.persist();
        const { value } = e.target;
        setSelect(value);
    }

    const handleFormSubmit = e => {
        if (e) e.preventDefault();
        cb();
        setText('');
    }

    return {
        text,
        select,
        handleInputChange,
        handleSelectChange,
        handleFormSubmit
    }
}

export default FormAction;