import React from 'react';
import TextInput from '../TextInput';
import renderer from 'react-test-renderer';

it('renders TextInput component correctly', () => {
    const component = renderer
    .create(<TextInput />)
    .toJSON();
    expect(component).toMatchSnapshot();
});