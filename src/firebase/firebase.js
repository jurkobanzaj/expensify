import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAAZjLQsK-myWJpb7fJj5FBDQwnP2wxbfk",
    authDomain: "expensify-899c2.firebaseapp.com",
    databaseURL: "https://expensify-899c2.firebaseio.com",
    projectId: "expensify-899c2",
    storageBucket: "expensify-899c2.appspot.com",
    messagingSenderId: "750549099971"
};

firebase.initializeApp(config);

const database = firebase.database();


// database.ref().set({
//     name: 'Yuriy Piddubnyak',
//     age: 40,
//     isSingle: false,
//     location: {
//         city: 'Kyiv',
//         country: 'Ukraine'
//     }
// });

database.ref().set({
    name: 'Yuriy Piddubnyak',
    age: 40,
    isSingle: false,
    location: {
        city: 'Kyiv',
        country: 'Ukraine'
    }
}).then(() => {
    console.log('Data is saved!');
}).catch((e) => {
    console.log('This failed: ', e);
});


// database.ref('age').set(24);
// database.ref('location/city').set('Barcelona');

// database.ref('languages').set({ // creates new entry, not rewrites entire databae
//         native: 'Ukrainian',
//         second: 'English',
//         third: 'Polish'
// }).then(() => {
//     console.log('Language data added!');
// }).catch((e) => {
//     console.log('Looks like you still have an error', e);
// });


database.ref('isSingle')
.set(null);

// database.ref('isSingle')
// .remove()
// .then(() => {
//     console.log('Data was removed!');
// }).catch((e) => {
//     console.log('Did not remove data', e);
// });
