import React from 'react';
import { shallow } from 'enzyme';
import { AddExpencePage } from '../../components/AddExpencePage';
import expenses from '../fixtures/expenses';

let addExpense, history, wrapper;

beforeEach(() => { // runs following code in the beginning of each test case
    addExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<AddExpencePage addExpense={addExpense} history={history} />);
});

test('should render add expense page correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(addExpense).toHaveBeenLastCalledWith(expenses[1]);
});