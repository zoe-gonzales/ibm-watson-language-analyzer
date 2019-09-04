import { useState } from 'react';

const FormAction = cb => {
    const [text, setText] = useState('');
    const [select, setSelect] = useState('Keywords');
    const [invalidReq, setInvalidReq] = useState(false);

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

    const handleFailedReq = () => {
        setInvalidReq(true);
    }

    return {
        text,
        select,
        invalidReq,
        handleInputChange,
        handleSelectChange,
        handleFormSubmit,
        handleFailedReq
    }
}

export default FormAction;