import { shallow } from 'enzyme';
import Form from '../components/Form';
import React from 'react';

describe('Form component actions', () => {
    it('componentWillMount: should set the initialText & initialMethod state', () => {
      const wrapper = shallow(<Form initialText={''} initialMethod={''} />);
      expect(wrapper.instance().state.text).toBe('');
      expect(wrapper.instance().state.method).toBe('');
    });
    it('handleInputChange: should set state to value in input field', () => {
        const wrapper = shallow(<Form initialText={'To be or not to be'} initialMethod={'keywords'}/>);
        const instance = wrapper.instance();
        expect(instance.state.text).toBe('');
        expect(instance.state.method).toBe('');
        instance.handleInputChange();
        expect(instance.state.text).toBe('To be or not to be');
        expect(instance.state.method).toBe('keywords');
    });
    it('handleSubmit: should clear state after submit is made', () => {
        const wrapper = shallow(<Form initialText={'To be or not to be'} initialMethod={'keywords'}/>);
        const instance = wrapper.instance();
        expect(instance.state.text).toBe('To be or not to be');
        expect(instance.state.method).toBe('keywords');
        instance.handleFormSubmit();
        expect(instance.state.text).toBe('');
        expect(instance.state.method).toBe('');
    });
  });