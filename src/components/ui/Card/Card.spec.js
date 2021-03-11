import React from 'react';
import TestRenderer from 'react-test-renderer';
import Card from './Card';

describe('Card', () => {
  it('should render', () => {
    const component = TestRenderer.create(<Card  />)
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
})