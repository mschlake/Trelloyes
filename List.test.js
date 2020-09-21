import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';

describe('List component', () => {
    it('Renders without crashing', () => {
        const section = document.createElement('section');
        ReactDOM.render(<List />, section);
        ReactDOM.unmountComponentAtNode(section);
    });

    it('Renders the UI as expected', () => {
        const tree = renderer
            .create(<List header="header" div="cards" button="button" />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});