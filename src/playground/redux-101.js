import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) { // activates action search for keyword
        case 'INCREMENT': // marks target keyword
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
        // checks if passed action property is number to avoid crashing app
            return { // describes task to do
                count: state.count + incrementBy // changing 'count' value
            };
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return { 
                count: state.count - decrementBy
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

    // if (action.type === 'INCREMENT') {
    //     return {
    //         count: state.count + 1 // changing 'count' value
    //     };
    // } else {
    //     return state;
    // };

});

// store.getState(); // returns object

// store.subscribe(() => { // tracks changes of state 
//     console.log(store.getState());
// });

const unsubscribe = store.subscribe(() => { // toggle tracking of state changes when called 
    console.log(store.getState());
});

store.dispatch({
    type: 'INCREMENT', // Action looks for 'type' word to fire this trigger
    incrementBy: 5 // Passing user parameters, available as Action object
});

store.dispatch({
    type: 'INCREMENT' // without provided incrementBy adds default parameter
});

// unsubscribe(); // calls toggle subscribe/unsubscribe function

store.dispatch({
    type: 'DECREMENT' 
});

store.dispatch({
    type: 'DECREMENT',
    decrementBy: 10
});

// unsubscribe();

store.dispatch({
    type: 'RESET' 
});

store.dispatch({
    type: 'SET',
    count: 101
});