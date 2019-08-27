import React from 'react';
import Home from '../pages/Home';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import sinon from 'sinon';

describe('Home page', () => {
    it('renders correctly', () => {
      const component = renderer
        .create(<Home apiResults={{}} />)
        .toJSON();
      expect(component).toMatchSnapshot();
    });
    it('calls componentDidMount with no data in apiResults', () => {
      sinon.spy(Home.prototype, 'componentDidMount');
      mount(<Home apiResults={{}} />);
      expect(Home.prototype.componentDidMount).to.have.property('results', []);
      expect(Home.prototype.componentDidMount).to.have.property('type', '');
      expect(Home.prototype.componentDidMount).to.have.property('text', '');
      Home.prototype.componentDidMount.restore();
    });
    it('calls componentDidMount with data in apiResults', () => {
      const data = {};
      data.results = [
            {
                keyword: 'Hello',
                relevance: 0.222,
                id: 1
            },
            {
                keyword: 'name',
                relevance: 0.222,
                id: 2
            },
            {
                keyword: 'Zoë',
                relevance: 0.222,
                id: 3
            }
        ];
      data.type = 'keywords';
      data.text = 'Something the user said';
      sinon.spy(Home.prototype, 'componentDidMount');
      mount(<Home apiResults={data} />);
      expect(Home.prototype.componentDidMount).to.have.property('results', data.results);
      expect(Home.prototype.componentDidMount).to.have.property('type', data.type);
      expect(Home.prototype.componentDidMount).to.have.property('text', data.text);
      Home.prototype.componentDidMount.restore();
    });
  });