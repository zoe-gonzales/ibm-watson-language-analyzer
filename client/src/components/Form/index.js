import React from 'react';
import TextInput from '../TextInput';
import DropDown from '../DropDownSelect';
import Button from '../SubmitButton';
import FormAction from './FormAction';
// import Home from '../../pages/Home';
import API from '../../utils/API';

const Form = () => {
    const { text, method, handleInputChange, handleSelectChange, handleFormSubmit } = FormAction(() => {
        // make request to API here
        // <Home apiResults={res} />
        if (method === 'Keywords') {
            API.getKeywords(text)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });
        } else if (method === 'Categories') {
            API.getCategories(text)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });
        } else if (method === 'Emotions') {
            API.getEmotions(text)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });
        }        
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
                    placeholder="Enter text to analyze"
                    value={text}
                    onChange={handleInputChange} />
            </div>
            <div className="row">
                <DropDown
                    name="method"
                    options={options}
                    value={method}
                    onChange={handleSelectChange} />
                <Button onClick={handleFormSubmit} />
            </div>
        </form>
    )
}

export default Form;