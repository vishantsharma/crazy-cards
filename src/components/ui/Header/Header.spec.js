import React from 'react';
import TestRenderer from 'react-test-renderer';
import Header from './Header';

describe('Header', () => {
  it('should render', () => {
    const component = TestRenderer.create(<Header  />)
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
})