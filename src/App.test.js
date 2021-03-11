import React from 'react';
import TestRenderer from 'react-test-renderer';
import App from './App';

jest.mock('react-redux', () => {
    const ActualReactRedux = jest.requireActual('react-redux');
    return {
        ...ActualReactRedux,
        useDispatch: jest.fn().mockImplementation(() => {
            return '';
        }),
    };
});

describe('App', () => {
    it('should render', () => {
        const component = TestRenderer.create(<App />)
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
})