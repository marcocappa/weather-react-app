import React from 'react';
import { shallow } from 'enzyme';
import CardData from '../index';

describe('<CardData />', () => {
    const props = {
        data: {
            temp: 8.9,
            app_temp: 9,
            rh: 89,
            weather: { description: 'Overcast clouds' },
            ob_time: ' 2021-03-10 18:06',
            timezone: 'Europe/London',
            pres: 998.9,
            wind_spd: 2.68,
            wind_dir: 200,
        },
    };
    it('should match snapshot', () => {
        const wrapper = shallow(<CardData {...props} />);
        expect(wrapper).toMatchSnapshot();
    });
});
