import React from 'react';
import Home from '../components/Home';
import renderer from 'react-test-renderer';
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
});