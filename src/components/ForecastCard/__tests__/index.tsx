import React from 'react';
import { shallow } from 'enzyme';
import Forecast from '../index';

describe('<Forecast />', () => {
    const props = {
        location: {
            CITY: 'London',
            COUNTRY: 'UK',
        },
        min: undefined,
        max: undefined,
    };

    it('should match snapshot', () => {
        const wrapper = shallow(<Forecast {...props} />);
        expect(wrapper).toMatchSnapshot();
    });
});
