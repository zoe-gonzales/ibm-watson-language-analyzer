import React from 'react';
import Grid from '../../components/ResultsGrid';
import Title from '../../components/Title';
import Directions from '../../components/Directions';
import Form from '../../components/Form';
import ResultsAction from './ResultsAction';
import './style.css';

const Home = ({ apiResults }) => {
    const { results, type, text } = ResultsAction(apiResults);
    const dirs = [
        {
            id: 1,
            text: 'Enter text to analyze'
        },
        {
            id: 2,
            text: 'Select method'
        },
        {
            id: 3,
            text: 'Get results!'
        }
    ];

    return (
        <div className='container'>
        {results ? (
            <Grid type={type} text={text} results={results} />
        ) : (
            <div>
                <Title>Language Analyzer</Title>
                <Directions dirs={dirs} />
                <Form />
            </div>
        )}
        </div>
    )
}

export default Home;