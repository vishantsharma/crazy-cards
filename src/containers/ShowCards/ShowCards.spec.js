import React from 'react';
import TestRenderer from 'react-test-renderer';
import ShowCards from './ShowCards';

jest.mock('react-redux', () => {
    const ActualReactRedux = jest.requireActual('react-redux');
    return {
        ...ActualReactRedux,
        useDispatch: jest.fn().mockImplementation(() => {
            return '';
        }),
        useSelector: jest.fn().mockImplementation(() => {
            return '';
        })
    };
});

describe('ShowCards', () => {
    it('should render', () => {
        const component = TestRenderer.create(<ShowCards />)
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
})