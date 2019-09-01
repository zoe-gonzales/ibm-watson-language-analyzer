import { useState, useEffect } from 'react';

const ResultsAction = apiResults => {
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

    return {
        results,
        type,
        text
    }
}

export default ResultsAction;