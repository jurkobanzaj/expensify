// Expenses Reducer

const expensesReducerDefaultState = [];

export default (state = expensesReducerDefaultState, action) => {
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