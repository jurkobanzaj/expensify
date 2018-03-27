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

const book = {
    title: 'Ego is the Ememy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const { name: publisherName = 'Self-Published' } = book.publisher;

console.log(publisherName);