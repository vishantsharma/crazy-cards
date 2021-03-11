import React from 'react';
import TestRenderer from 'react-test-renderer';
import SelectField from './SelectField';

describe('SelectField', () => {
    let props = {
        name: '',
        label: '',
        placeholder: '',
        value: '',
        options: [],
        optionKey: "id",
        optionText: "name",
        onChange: jest.fn().mockReturnValue(),
        error: '',
        className: ''
    }
    it('should render', () => {
        const component = TestRenderer.create(<SelectField {...props} />)
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
})