import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Card from './Card';

describe('Card component', () => {
    it('Renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Card />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('Renders the UI as expected', () => {
        const tree = renderer
            .create(<Card button="button" title="First Card" content="lorem ipsum" />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});