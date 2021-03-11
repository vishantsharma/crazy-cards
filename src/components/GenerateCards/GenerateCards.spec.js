import React from 'react';
import TestRenderer from 'react-test-renderer';
import GenerateCards from './GenerateCards';

describe('GenerateCards', () => {
    let props = {
        data: '',
        selected: '',
        handleClick: jest.fn().mockReturnValue()
    }
  it('should render', () => {
    const component = TestRenderer.create(<GenerateCards {...props} />)
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
})