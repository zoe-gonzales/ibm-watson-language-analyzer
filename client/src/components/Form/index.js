import React from 'react';
import ReactDOM from 'react-dom';
import TextInput from '../TextInput';
import DropDown from '../DropDownSelect';
import Button from '../SubmitButton';
import FormAction from './FormAction';
import Home from '../../components/Home';
import API from '../../utils/API';

const Form = () => {
    const {
        text,
        select,
        invalidReq,
        handleInputChange,
        handleSelectChange,
        handleFormSubmit,
        handleFailedReq
    } = FormAction(() => {
        if (select === 'Keywords') {
            API.getKeywords(text)
            .then(res => {
                const stats = {};
                stats.results = res.data.Results;
                let id = 1;
                stats.results.forEach(res => {
                    res.id = id;
                    id++;
                });
                stats.type = "Keyword";
                stats.text = text;
                ReactDOM.render(<Home apiResults={stats}/>, document.getElementById('root'));
            })
            .catch(err => {
                console.log(err);
                handleFailedReq();
            });
        } else if (select === 'Categories') {
            API.getCategories(text)
            .then(res => {
                const stats = {};
                stats.results = res.data.Results;
                let id = 1;
                stats.results.forEach(res => {
                    res.id = id;
                    id++;
                });
                stats.type = "Category";
                stats.text = text;
                ReactDOM.render(<Home apiResults={stats}/>, document.getElementById('root'));
            })
            .catch(err => {
                console.log(err);
                handleFailedReq();
            });
        } else if (select === 'Emotions') {
            API.getEmotions(text)
            .then(res => {
                const stats = {};
                stats.results = res.data.Results;
                stats.type = "Emotion";
                stats.text = text;
                ReactDOM.render(<Home apiResults={stats}/>, document.getElementById('root'));
            })
            .catch(err => {
                console.log(err);
                handleFailedReq();
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
        <div>
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
                        name="select"
                        options={options}
                        value={select}
                        onChange={handleSelectChange} />
                    <Button onClick={handleFormSubmit} />
                </div>
            </form>
            <div className="row">
                {
                    invalidReq 
                    ? <div>Unable to analyze text. Please submit a longer sentence or paragraph to analyze!</div> 
                    : null
                }
            </div>
        </div>
        
    )
}

export default Form;