import React from 'react';
import SubmitButton from '../components/SubmitButton';
import renderer from 'react-test-renderer';

it('renders SubmitButton component correctly', () => {
    const handleClick = e => {
        console.log(`Event: ${e.target}`);
        console.log('Click event recognized successfully');
    };
    const component = renderer
    .create(<SubmitButton onClick={handleClick} />)
    .toJSON();
    expect(component).toMatchSnapshot();
});