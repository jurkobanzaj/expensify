import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// Add expense

const addExpense = (
    {
        description = '', 
        note = '', 
        amount = 0, 
        createdAt = 0 
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

// Remove expense

const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// Edit expense

const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

// Filter expense

const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

// Sorting
// by amount

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

// by date

const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

// by period

const setStartDate = (startDate) =>({ // undefined is already defult property, so no need to set defaults here
    type: 'SET_START_DATE', // name of action
    startDate // data to use
});

const setEndDate = (endDate) =>({
    type: 'SET_END_DATE',
    endDate
});

// Expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE': 
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => { // returns new array. If this function returns true, it will be cept in array if false - removed
                return id !== action.id; // if id will not be equal, it will keep item in array, if it return false item will be removed 
            });
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates // will rewrite any property that action will provide. In this case - amount sent by fired trigger
                    }
                } else {
                    return expense;
                };
            });
        default:
            return state;
    };
};

// Filters reducer

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date', // date or amount
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state;
    };
};

// Visible expenses

const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate} ) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        // if starDate is not set, item is shown. if set, it checks if createdAt is bigger or equal than startDate
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
};

// Store creation

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

// Tracking changes

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

// Adding data

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: -11000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000 }));

// Firing up data removal
// store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// Firing up data modification
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

// Firing up filter
// store.dispatch(setTextFilter('Rent'));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));

// Temp State

const demoState = {
    expenses: [{
        id: 'sdjfhjdkshf',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};