import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';
import expenses from '../reducers/expenses';

const ExpenseListItem = ({ dispatch, description, amount, createdAt, id }) => ( // {} and items! just like that! 
    <div>
        <h3>{description}</h3>
        <p>{amount} - {createdAt}</p>
        <button onClick={() => dispatch(removeExpense({ id }))}>Remove</button> 
        {
            //id should be an object! as described in actions!
        }
    </div>
);

export default connect()(ExpenseListItem);