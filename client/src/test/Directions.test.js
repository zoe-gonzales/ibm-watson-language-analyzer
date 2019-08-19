import React from 'react';
import Directions from '../components/Directions';
import renderer from 'react-test-renderer';

it('renders Directions component correctly', () => {
    const steps = [
        'Step 1',
        'Step 2',
        'Step 3'
    ];
    const component = renderer
    .create(<Directions steps={steps} />)
    .toJSON();
    expect(component).toMatchSnapshot();
});