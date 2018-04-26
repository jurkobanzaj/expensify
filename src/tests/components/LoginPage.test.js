import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../components/LoginPage';

test('should render Login Page correctly', () => {
    const wrapper = shallow(<LoginPage />);
    expect(wrapper).toMatchSnapshot();
});

test('should call startLogin on button click', () => {
    const startLogin = jest.fn(); // setup spy that runs instead of real action
    const wrapper = shallow(<LoginPage startLogin={startLogin} />); // passes component and its props to test
    wrapper.find('button').simulate('click'); // finds button and simulates click
    expect(startLogin).toHaveBeenCalled(); // compares received and expected actions 
});