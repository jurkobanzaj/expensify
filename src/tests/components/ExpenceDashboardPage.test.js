import React from 'react';
import { shallow } from 'enzyme';
import ExpenceDashboardPage from '../../components/ExpenceDashboardPage';

test('should render Expence Dashboard Page correctly', () => {
    const wrapper = shallow(<ExpenceDashboardPage />);
    expect(wrapper).toMatchSnapshot();
}); 