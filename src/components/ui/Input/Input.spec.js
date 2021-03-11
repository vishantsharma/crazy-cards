import React from 'react';
import TestRenderer from 'react-test-renderer';
import Input from './Input';

describe('Input', () => {
    let props = {
        name: '', 
        labelName: '', 
        type: '', 
        value: '', 
        placeholder: '', 
        error: '',
        onChange: jest.fn().mockReturnValue()
    }
  it('should render', () => {
    const component = TestRenderer.create(<Input {...props} />)
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })
})