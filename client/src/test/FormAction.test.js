import { mount } from 'enzyme';
import sinon from 'sinon';
import Form from '../components/Form';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';


describe('Form component with FormAction hook', () => {
  afterEach(() => sinon.restore());

  it('calls Form component once', function () {
    const spy = sinon.spy(Form);
    expect(spy.calledOnce);
  });

  it('handleInputChange: should set state to value in input field', () => {
    const { getByLabelText } = render(<Form />);
    const value = fireEvent.change(getByLabelText(/text/), {target: {value: 'this is some sample text'}});
    assert(value, 'this is some sample text');
  });

  it('handleSubmit: should clear state after submit is made', () => {
    const { handleFormSubmit } = FormAction();
    const spy = sinon.spy(handleFormSubmit);
    let e = { target: {name: 'text', value: 'this is some sample text'}};
    handleFormSubmit(e);
    assert(spy.calledWith(e));
    assert(spy.resetHistory());
  });
});