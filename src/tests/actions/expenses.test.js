import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({ // toEqual compares array or object properties, objects and array ar not to be compared with ===
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should setup edit expense action object', () => {
    const action = editExpense('123abc', { note: 'New note value' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'New note value'
        }
    });
});

test('should setup add expense object with provided values', () => {
    const expenseData = {
        description:'some description', 
        note: 'some note',
        amount: 100500,
        createdAt: 100000
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
        // expense: {
        //     description: 'some description', 
        //     note: 'some note',
        //     amount: 100500,
        //     createdAt: 100000
        // }
    });
});

test('should setup add expense object with provided values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '', 
            note: '',
            amount: 0,
            createdAt: 0,
            id: expect.any(String)
        }
    });
});