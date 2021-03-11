import React from 'react';
import TestRenderer from 'react-test-renderer';
import CaptureForm from './CaptureForm';

jest.mock('react-redux', () => {
    const ActualReactRedux = jest.requireActual('react-redux');
    return {
        ...ActualReactRedux,
        useDispatch: jest.fn().mockImplementation(() => {
            return '';
        }),
    };
});

describe('CaptureForm', () => {
    it('should render', () => {
        const component = TestRenderer.create(<CaptureForm />)
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
})