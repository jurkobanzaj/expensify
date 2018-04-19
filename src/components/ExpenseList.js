import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div>
        {
            props.expenses.length === 0 ? (
                <p>No expenses yet!</p>
            ) : (
                props.expenses.map((expense) => ( // remember what's in parentesis!
                        <ExpenseListItem 
                            {...expense} // this line does the same as lines 11 and 12!
                            // description={expense.description} 
                            // amount={expense.amount} 
                            key={expense.id} 
                        />
                    )
                )
            )
        }
    </div>
);

const mapStateToProps = (state) =>{ // converts state to props. Reruns as state changes
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList); // connects redux to component