import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
// import { connect } from 'react-redux';
// import { removeExpense } from '../actions/expenses';

export const ExpenseListItem = ({ dispatch, description, amount, createdAt, id }) => ( // {} and items! just like that! 
    <Link className="list-item" to={`/edit/${id}`}>
        <div>
            <h3 className="list-item__title">{description}</h3>
            <span className="list-item__sub-title">
                {moment(createdAt).format('MMMM Do, YYYY')}
            </span>
        </div>
        <h3 className="list-item__data">
            {numeral(amount / 100).format('$0,0.00')}
        </h3>
    </Link> 
    // <button onClick={() => dispatch(removeExpense({ id }))}>Remove</button> 
    //     //id should be an object! as described in actions!
);

// export default connect()(ExpenseListItem);
export default ExpenseListItem;