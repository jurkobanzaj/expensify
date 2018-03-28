// Object destructuring

const person = {
    name: 'Andrew',
    age: 26,
    location: {
        city: 'Philadelphia',
        temp: 88
    }
};

const { name = 'Anonymous', age } = person; // this line grabs fields from object and creates variables from it
// variable 'name' has default value
console.log(`${name} is ${age}.`);

const { city, temp: temperature } = person.location; // variable temp renamed to temperature. Variable 'temp' is not awailable!
if (city && temperature) {
    console.log(`It's ${temperature} in ${city}.`);
};

// const book = {
//     title: 'Ego is the Ememy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);

// Object destructuring

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

const [street, town, state = 'New York', zip] = address; // to destructurize array add variable for every item
// to skip item leave the comma, if item is in the end, no comma needed
// New York is default value. It'll fire up even with empty array

// console.log(`You are in ${address[1]}, ${address[2]}`)
console.log(`You are in ${town}, ${state}`)

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [drink, , medium] = item;

console.log(`A medium ${drink} costs ${medium}.`);