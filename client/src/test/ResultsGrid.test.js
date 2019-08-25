import React from 'react';
import ResultsGrid from '../components/ResultsGrid';
import renderer from 'react-test-renderer';

it('renders ResultsGrid component correctly', () => {
    const input = 'Hello my name is Zoë'
    const typeOfResults = 'Keyword'
    const apiResults = [
        {
            keyword: 'Hello',
            relevance: 0.222
        },
        {
            keyword: 'name',
            relevance: 0.222
        },
        {
            keyword: 'Zoë',
            relevance: 0.222
        }
    ];
    const component = renderer
    .create(<ResultsGrid text={input} type={typeOfResults} results={apiResults} />)
    .toJSON();
    expect(component).toMatchSnapshot();
});