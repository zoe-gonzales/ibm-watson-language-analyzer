import React from 'react';
import TextInput from '../components/TextInput';
import renderer from 'react-test-renderer';

it('renders TextInput component correctly', () => {
    const name = 'textToSearch';
    const placeholder = 'Text to analyze...';
    const handleChange = e => {
        console.log(`Event: ${e.target}`);
        console.log('Text input field changed');
    };
    const component = renderer
    .create(<TextInput name={name} placeholder={placeholder} onChange={handleChange} />)
    .toJSON();
    expect(component).toMatchSnapshot();
});