import React from 'react';
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses'

const AddExpencePage = (props) => (
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm 
            onSubmit={(expense) => {
                props.dispatch(addExpense(expense));
                props.history.push('/'); // redirects after expense were added to main page
            }}
        />
    </div>
);

export default connect()(AddExpencePage);