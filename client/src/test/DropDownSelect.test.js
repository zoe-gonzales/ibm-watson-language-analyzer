import React from 'react';
import DropDownSelect from '../components/DropDownSelect';
import renderer from 'react-test-renderer';

it('renders DropDownSelect component correctly', () => {
    const onChange = e => console.log('something has changed and the event is this:' + e);
    const name = 'opts'
    const options = [
        {
            'name': 'Option 1',
            'id': 2
        },
        {
            'name': 'Option 2',
            'id': 4
        },
        {
            'name': 'Option 3',
            'id': 6
        },
        {
            'name': 'Option 4',
            'id': 8
        } 
    ];
    const component = renderer
    .create(<DropDownSelect options={options} name={name} onChange={onChange} />)
    .toJSON();
    expect(component).toMatchSnapshot();
});