import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) { // activates action search for keyword
        case 'INCREMENT': // marks target keyword
            return { // describes task to do
                count: state.count + 1 // changing 'count' value
            };
        case 'DECREMENT':
            return { 
                count: state.count - 1 
            };
        case 'RESET': 
            return { 
                count: 0
            };
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
console.log(store.getState());

store.dispatch({
    type: 'INCREMENT' // Action looks for 'type' word to fire this trigger
});

console.log(store.getState());

store.dispatch({
    type: 'DECREMENT' 
});

console.log(store.getState());

store.dispatch({
    type: 'RESET' 
});

console.log(store.getState());