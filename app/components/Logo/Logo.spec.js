import React from 'react';
import {shallow} from 'enzyme';

import Logo from './index';


describe('<Logo />', () => {

    it('renders', () => {
        const component = shallow(<Logo/>);
        expect(component.find('.Logo').length).toEqual(1);
    });

});
