import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate } from '../actions/filters';

const ExpenseListFilters = (props) => (
    <div>
        <input 
            type="text" 
            value={props.filters.text} 
            onChange={(e) => { // onChange function reads changes from input 
                props.dispatch(setTextFilter(e.target.value)); // e.target.value - precise way to get input changes
            }} 
        />
        <select 
            value={props.filters.sortBy}
            onChange={(e) => {
                props.dispatch(e.target.value === 'amount' ? sortByAmount() : sortByDate());
            }} 
        >
            <option value="date">Date</option>
            <option value="amount">Amount</option>
        </select>
    </div>
);

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(ExpenseListFilters); // first () takes map state to props function, the second - component 