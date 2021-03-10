import React from 'react';
import { shallow } from 'enzyme';
import FilterInput from '../index';

describe('<FilterInput />', () => {
    const onChange = jest.fn();
    const props = {
        label: 'Test',
        onChange,
    };

    let wrapper: any;
    beforeEach(() => {
        wrapper = shallow(<FilterInput {...props} />);
    });
    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('should invoke onChange', () => {
        const event = { target: { value: 10 } };
        wrapper.find('input').simulate('change', event);
        expect(onChange).toHaveBeenCalledTimes(1);
        expect(onChange).toHaveBeenCalledWith(event);
    });
});
