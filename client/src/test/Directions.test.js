import React from 'react';
import Directions from '../components/Directions';
import renderer from 'react-test-renderer';

it('renders Directions component correctly', () => {
    const steps = [
        {
            'text': 'Step 1',
            'id': 2
        },
        {
            'text': 'Step 2',
            'id': 3
        },
        {
            'text': 'Step 3',
            'id': 4
        }
    ];
    const component = renderer
    .create(<Directions dirs={steps} />)
    .toJSON();
    expect(component).toMatchSnapshot();
});