import { createStore } from 'redux';

// const add = (data) => {
//     return data.a + data.b;
// };
// console.log(add({ a: 1, b: 12 }));

// // Restructured:

// const addR = ({ a, b }, c) => {
//     return a + b + c;
// };

// console.log(addR({ a: 2, b: 14 }, 100));

// Action Generator setup:
// const incrementCount = (payload = {}) => ({
//     type: 'INCREMENT',
//     incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1
// });

// Restructured Action Generator:
const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const reset = () => ({
    type: 'RESET'
});

const set = ({ count = 0 } = {}) =>({
    type: 'SET',
    count
});
 
// Store setup. Store refers to actions
const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) { // activates action search for keyword
        case 'INCREMENT': // marks target keyword
            return { // desides what to do
                count: state.count + action.incrementBy // changing 'count' value
            };
        case 'DECREMENT':
            return { 
                count: state.count - action.decrementBy // looks for decrementBy in action object!!!!
            };
        case 'RESET': 
            return { 
                count: 0
            };
        case 'SET':
            return {
                count: action.count
            }
            default: // describes dafault action
                return state;
    }

});

const unsubscribe = store.subscribe(() => { // toggle tracking of state changes when called 
    console.log(store.getState());
});

store.dispatch(incrementCount()); // Call of previously declared Action

store.dispatch(incrementCount({ incrementBy: 5 })); // Passing custom data

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(reset());

store.dispatch(set({ count: 101 }));