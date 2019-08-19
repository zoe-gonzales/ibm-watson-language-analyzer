import React from 'react';
import Home from '../pages/Home';
import renderer from 'react-test-renderer';

it('renders Home component correctly', () => {
    const component = renderer
    .create(<Home />)
    .toJSON();
    expect(component).toMatchSnapshot();
});