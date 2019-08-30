import React from 'react';
import Home from '../pages/Home';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import sinon from 'sinon';

describe('Home page', () => {
  afterEach(() => sinon.restore());

  it('renders correctly', () => {
    const component = renderer
      .create(<Home apiResults={{}} />)
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('calls Home component once with no data', () => {
    const spy = sinon.spy(Home);
    expect(spy.calledOnce);
    expect(spy.calledWith({}));
  });

  it('calls Home component with data', () => {
    const results = { data: 'some data' };
    const wrapper = mount(<Home apiResults={results} />);
    expect(wrapper.props().apiResults).to.equal(results);
  });
});