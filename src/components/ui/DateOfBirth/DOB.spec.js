import React from 'react';
import TestRenderer from 'react-test-renderer';
import DOB from './DOB';

describe('DOB', () => {
    let props = {
        data: {
            dob: {
                day: '',
                month: '',
                year: ''
            }
        },
        type: '',
        errors: '',
        className: '',
        handleChange: jest.fn().mockReturnValue()
    }
    it('should render', () => {
        const component = TestRenderer.create(<DOB {...props} />)
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
})