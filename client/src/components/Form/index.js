import React from 'react';
import TextInput from '../TextInput';
import DropDown from '../DropDownSelect';
import Button from '../SubmitButton';
import FormAction from './FormAction';

const Form = () => {
    const { text, method, handleInputChange, handleFormSubmit } = FormAction(() => {
        // make request to API here
    });

    return (
        <form>
            <div className="row">
                <TextInput
                    name="text"
                    placeholder="Enter text here..."
                    onChange={handleInputChange} />
            </div>
            <div className="row">
                <DropDown
                    name="method"
                    options={ ["Keywords", "Categories", "Emotions"] }
                    onChange={handleInputChange} />
                <Button onClick={handleFormSubmit} />
            </div>
        </form>
    )
}

export default Form;