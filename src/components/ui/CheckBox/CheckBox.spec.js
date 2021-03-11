import React from 'react';
import TestRenderer from 'react-test-renderer';
import CheckBox from './CheckBox';

describe('CheckBox', () => {
    let props = {
        name: '', 
        label: '', 
        checked: '', 
        onClick: jest.fn().mockReturnValue()
    }
  it('should render', () => {
    const component = TestRenderer.create(<CheckBox {...props} />)
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
})