import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListItem } from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';

test('should render expense list item', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[1]} />); // spread method is needed
    expect(wrapper).toMatchSnapshot();
});