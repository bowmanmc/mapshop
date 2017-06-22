import React from 'react';
import {shallow} from 'enzyme';

import RecentProject from './RecentProject';


describe('<RecentProject />', () => {

    it('renders', () => {
        const proj = {
            name: 'Test Project'
        };
        const component = shallow(<RecentProject project={proj} />);
        expect(component.find('.OpenProjectScreen__RecentProject').length).toEqual(1);
    });

});
