import { shallow } from 'enzyme';
import Results from '../pages/Results';
import React from 'react';
import renderer from 'react-test-renderer';

describe('Results page', () => {
    it('renders correctly', () => {
        const component = renderer
        .create(<Results />)
        .toJSON();
        expect(component).toMatchSnapshot();
    });
    it('componentWillMount: should set initialResults to state', () => {
      const wrapper = shallow(<Results initialResults={[]} />);
      expect(wrapper.instance().state.results).toBe([]);
    });
    it('componentDidMount: should set state to data from api response', () => {
        const data = [
            {
                keyword: 'Hello',
                relevance: 0.222
            },
            {
                keyword: 'name',
                relevance: 0.222
            },
            {
                keyword: 'Zoë',
                relevance: 0.222
            }
        ];
        const wrapper = shallow(<Results initialResults={data} />);
        const instance = wrapper.instance();
        expect(instance.state.results).toBe([]);
        instance.componentDidMount();
        expect(instance.state.results).toBe(data);
    });
  });