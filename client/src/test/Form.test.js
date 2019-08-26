import React from 'react';
import Form from '../components/Form';
import renderer from 'react-test-renderer';

it('renders Form component correctly', () => {
    const component = renderer
    .create(<Form />)
    .toJSON();
    expect(component).toMatchSnapshot();
});