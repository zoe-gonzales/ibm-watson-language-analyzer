import { useState } from 'react';

const formAction = cb => {
    const [text, setText] = useState('');
    const [method, setMethod] = useState('');

    const handleTextInputChange = e => {
        e.persist();
        const { name, value } = e.target;
        setText(text => ({text, [name]: value}));
    }

    const handleSelect = e => {
        e.persist();
        const { name, value } = e.target;
        setMethod(method => ({method, [name]: value}));
    }

    const handleFormSubmit = e => {
        if (e) e.preventDefault();
        cb();
        setText('');
        setMethod('');
    }

    return (
        text,
        method,
        handleTextInputChange,
        handleSelect,
        handleFormSubmit
    )
}

export default formAction;