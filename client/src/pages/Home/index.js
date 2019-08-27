import React, { useState, useEffect } from 'react';
import Grid from '../../components/ResultsGrid';
import Title from '../../components/Title';
import Directions from '../../components/Directions';
import Form from '../../components/Form';

const Home = ({ apiResults }) => {
    const [results, setResults] = useState([]);
    const [type, setType] = useState('');
    const [text, setText] = useState('');

    useEffect(() => {
        if (apiResults !== {}) {
            setResults(apiResults.results);
            setType(apiResults.type);
            setText(apiResults.text);
        }
    }, []);

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
    ]

    return (
        <div className='container'>
        {results.length > 0 ? (
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