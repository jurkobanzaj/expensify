import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';

test('should render Header correctly', () => {
    const wrapper = shallow(<Header startLogout={() =>{ }} />);
    expect(wrapper).toMatchSnapshot();


    // expect(wrapper.find('h1').length).toBe(1); // looks for H1 and checks if there is only 1 instance of it 
    // expect(wrapper.find('h1').text()).toBe('Expensify'); // checks if h1's text is 'Expensify'
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
});

test('should call startLogout on button click', () => {
    const startLogout = jest.fn();
    const wrapper = shallow(<Header startLogout={startLogout} />);
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
});