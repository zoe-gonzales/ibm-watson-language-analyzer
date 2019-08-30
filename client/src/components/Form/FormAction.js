import { useState } from 'react';

const FormAction = cb => {
    const [inputs, setInputs] = useState({text: '', method: ''})

    const handleInputChange = e => {
        e.persist();
        const { name, value } = e.target;
        setInputs(inputs => ({...inputs, [name]: value}));
    }

    const handleFormSubmit = e => {
        if (e) e.preventDefault();
        cb();
        setInputs({text: '', method: ''});
    }

    return {
        inputs,
        handleInputChange,
        handleFormSubmit
    }
}

export default FormAction;