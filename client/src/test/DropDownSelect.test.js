import React from 'react';
import DropDownSelect from '../components/DropDownSelect';
import renderer from 'react-test-renderer';

it('renders DropDownSelect component correctly', () => {
    const options = [
        'Option 1',
        'Option 2',
        'Option 3',
        'Option 4',
    ]
    const component = renderer
    .create(<DropDownSelect options={options} />)
    .toJSON();
    expect(component).toMatchSnapshot();
});