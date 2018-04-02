import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense, removeExpense, editExpense } from './actions/expenses';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
// import './styles/base/reset.scss';
import './styles/Styles.scss';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill', amount: 600, createdAt: 5000 }));
store.dispatch(addExpense({ description: 'Gas bill', amount: 1500, createdAt: 7700 }));
store.dispatch(addExpense({ description: 'Rent', amount: 109500, createdAt: 1000 }));

// store.dispatch(setTextFilter('water'));

// setTimeout(() => {
//     store.dispatch(setTextFilter('bill'))
// }, 3000);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = ( // connects application to store
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));

// ReactDOM.render(<AppRouter />, document.getElementById('app'));