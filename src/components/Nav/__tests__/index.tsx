import React from 'react';
import { shallow } from 'enzyme';
import Nav from '../index';

describe('<Nav />', () => {
    it('should match snapshot', () => {
        const wrapper = shallow(<Nav />);
        expect(wrapper).toMatchSnapshot();
    });
});
