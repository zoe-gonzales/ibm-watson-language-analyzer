import React from 'react';
import DropDownSelect from '../components/DropDownSelect';
import renderer from 'react-test-renderer';

it('renders DropDownSelect component correctly', () => {
    const onChange = e => console.log('something has changed and the event is this:' + e);
    const name = 'opts'
    const options = [
        'Option 1',
        'Option 2',
        'Option 3',
        'Option 4',
    ]
    const component = renderer
    .create(<DropDownSelect options={options} name={name} onChange={onChange} />)
    .toJSON();
    expect(component).toMatchSnapshot();
});