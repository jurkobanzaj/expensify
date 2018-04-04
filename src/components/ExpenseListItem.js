import React from 'react';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({ dispatch, description, amount, createdAt, id }) => ( // {} and items! just like that! 
    <div>
        <Link to={`/edit/${id}`} ><h3>{description}</h3></Link> 
        {
            // LINK! NOT <A></A> TAG!
        }
        <p>{amount} - {createdAt}</p>
        {
        // <button onClick={() => dispatch(removeExpense({ id }))}>Remove</button> 
        //     //id should be an object! as described in actions!
        }
    </div>
);

// export default connect()(ExpenseListItem);
export default ExpenseListItem;