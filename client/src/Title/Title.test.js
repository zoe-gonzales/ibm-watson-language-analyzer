import React from 'react';
import Title from '../Title';
import renderer from 'react-test-renderer';

it('renders Title component correctly', () => {
  const component = renderer
  .create(<Title>Text Analyzer</Title>)
  .toJSON();
  expect(component).toMatchSnapshot();
});