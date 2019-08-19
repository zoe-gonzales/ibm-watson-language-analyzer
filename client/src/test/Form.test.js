import { shallow } from 'enzyme';
import Form from '../components/Form';
import React from 'react';
import renderer from 'react-test-renderer';

describe('Form component', () => {
    it('Form: renders correctly', () => {
        const component = renderer
        .create(<Form />)
        .toJSON();
        expect(component).toMatchSnapshot();
    });
    it('componentWillMount: should set the initialSearchValue to state', () => {
      const wrapper = shallow(<Form initialSearchValue={''} initialRequestType={''} />);
      expect(wrapper.instance().state.textToSearch).toBe('');
      expect(wrapper.instance().state.requestType).toBe('');
    });
    it('handleInputChange: should set state to value in input field', () => {
        const wrapper = shallow(<Form initialSearchValue={'To be or not to be'} initialRequestType={'keywords'}/>);
        const instance = wrapper.instance();
        expect(instance.state.textToSearch).toBe('');
        expect(instance.state.requestType).toBe('');
        instance.handleInputChange();
        expect(instance.state.textToSearch).toBe('To be or not to be');
        expect(instance.state.requestType).toBe('keywords');
    });
    it('handleSubmit: should clear state after submit is made', () => {
        const wrapper = shallow(<Form initialSearchValue={'To be or not to be'} initialRequestType={'keywords'}/>);
        const instance = wrapper.instance();
        expect(instance.state.textToSearch).toBe('To be or not to be');
        expect(instance.state.requestType).toBe('keywords');
        instance.handleSubmit();
        expect(instance.state.textToSearch).toBe('');
        expect(instance.state.requestType).toBe('');
    });
  });