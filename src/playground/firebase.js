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

database.ref('expenses')
    .on('child_removed', (snapshot) => { // snapshot has removed data 
        console.log(snapshot.key, snapshot.val());
    });

database.ref('expenses')
    .on('child_changed', (snapshot) => { // snapshot has changed record
        console.log(snapshot.key, snapshot.val());
    });

database.ref('expenses')
    .on('child_added', (snapshot) => { // snapshot has changed record
        console.log(snapshot.key, snapshot.val());
    });

// database.ref('expenses')
//     .once('value')
//     .then((snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     });

// database.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = [];
//         snapshot.forEach((expense) => {
//             expenses.push({
//                 id: expense.key,
//                 ...expense.val()
//             });
//         });
//         console.log(expenses);
//     });

// setTimeout (() => {
//     database.ref('expenses/-LAskEwDbv4Xv0fKtRoU/amount').set(1555);
// }, 3500);

// setTimeout(() => {
//     database.ref('name').set('Yuriy Piddubnyak');
// }, 3500);

// database.ref('expenses').push({
//     description: 'Gum',
//     note: '',
//     amount: 195,
//     createdAt: 0
// });

// database.ref('notes/-LAshRvm0Ov8mGxFTQRz').update({ // update particular value
//     body: 'Relax a bit'
// });

// database.ref('notes').push({ // writes object and generates id value
//     title: 'Have a break',
//     body: 'Right after this lesson'
// });

// const onValueChange = database.ref().on('value', (snapshot) => { // snapshot is received from success handler
// value describes the kind of event subscriber is looking for 
//     const val = snapshot.val(); // val is the method to get value from snapshot
//     console.log(`${val.name} is a ${val.job.title} in ${val.job.company}`);
// }, (e) => {
//     console.log('oops!', e);
// });

// setTimeout(() => {
//     database.ref('name').set('Yuriy Piddubnyak');
// }, 3500);

// database.ref().on('value', (snapshot) => { // subscribtion for data change
//     console.log(snapshot.val());
// });

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('some error message here', e);
// });

// setTimeout(() => {
//     database.ref('age').set(25);
// }, 3500);

// setTimeout(() => {
//     database.ref().off('value', onValueChange); // cancels subscribtion for onValueChange
//     // database.ref().off(); // unsubscribtion for data change
// }, 3500);

// setTimeout(() => {
//     database.ref('age').set(33);
// }, 3500);

// // database.ref() // returns entire base
// // database.ref('location') // returns just one object
// database.ref('location/city') // returns one field value
//     .once('value') // event handler here?
//     .then((snapshot) => { 
//         const val = snapshot.val(); // data lives in this instance
//         console.log(val);
//     })
//     .catch((e) => { // error handler
//         console.log('Some message here', e); 
//     });

// database.ref().set({
//     name: 'Yuriy Piddubnyak',
//     age: 40,
//     isSingle: false,
//     location: {
//         city: 'Kyiv',
//         country: 'Ukraine'
//     }
// });

// database.ref().set({ // sets new data
//     name: 'Yuriy Piddubnyak',
//     age: 40,
//     stressLevel: 6,
//     job: {
//         title: 'Software developer',
//         company: 'Google'
//     },
//     isSingle: false,
//     location: {
//         city: 'Kyiv',
//         country: 'Ukraine'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('This failed: ', e);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });

// database.ref().update({
//     name: 'Jurko Banzaj', // updates data
//     age: 26, // updates data
//     job: 'software developer', // adds new data
//     isSingle: null, // removes data
//     'location/city': 'Boston' // updates nested data
// });

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


// database.ref('isSingle')
// .set(null);

// database.ref('isSingle')
// .remove()
// .then(() => {
//     console.log('Data was removed!');
// }).catch((e) => {
//     console.log('Did not remove data', e);
// });
