import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
// import { connect } from 'react-redux';
// import { removeExpense } from '../actions/expenses';

export const ExpenseListItem = ({ dispatch, description, amount, createdAt, id }) => ( // {} and items! just like that! 
    <div>
        <Link to={`/edit/${id}`} ><h3>{description}</h3></Link> 
        {
            // LINK! NOT <A></A> TAG!
        }
        <p>
            {numeral(amount / 100).format('$0,0.00')}
            -
            {moment(createdAt).format('MMMM Do, YYYY')}
        </p>
        {
        // <button onClick={() => dispatch(removeExpense({ id }))}>Remove</button> 
        //     //id should be an object! as described in actions!
        }
    </div>
);

// export default connect()(ExpenseListItem);
export default ExpenseListItem;