import React from 'react';
import TextInput from '../TextInput';
import DropDown from '../DropDownSelect';
import Button from '../SubmitButton';
import FormAction from './FormAction';
// import Home from '../../pages/Home';
import API from '../../utils/API';

const Form = () => {
    const { inputs, handleInputChange, handleFormSubmit } = FormAction(() => {
        // make request to API here
        // <Home apiResults={res} />
        let req;
        if (inputs.method === 'Keywords') {
            req = API.getKeywords(inputs.text);
        } else if (inputs.method === 'Categories') {
            req = API.getCategories(inputs.text);
        } else if (inputs.method === 'Emotions') {
            req = API.getEmotions(inputs.text);
        }
        req
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        });
    });

    const options = [
        {
            "name": "Keywords",
            "id": 1
        },
        {
            "name": "Categories",
            "id": 2
        },
        {
            "name": "Emotions",
            "id": 3
        }
    ];

    return (
        <form>
            <div className="row">
                <TextInput
                    name="text"
                    placeholder="Enter text here..."
                    value={inputs.text}
                    onChange={handleInputChange} />
            </div>
            <div className="row">
                <DropDown
                    name="method"
                    options={options}
                    value={inputs.method}
                    onChange={handleInputChange} />
                <Button onClick={handleFormSubmit} />
            </div>
        </form>
    )
}

export default Form;