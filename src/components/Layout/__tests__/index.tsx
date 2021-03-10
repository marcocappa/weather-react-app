import React from 'react';
import { shallow } from 'enzyme';
import Layout from '../index';

describe('<Layout />', () => {
    const props = {
        title: 'title',
        children: (
            <div>
                <h2>children</h2>
                <p>other content</p>
            </div>
        ),
    };

    it('should match snapshot', () => {
        const wrapper = shallow(<Layout {...props} />);
        expect(wrapper).toMatchSnapshot();
    });
});
