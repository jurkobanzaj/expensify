class Person {
    constructor(name = "Unknown person", age = 0) {
        this.name = name;
        this.age = age;
        // console.log('message from constructor'); // you can pass functions here
    }
    getGreeting() {
        // return 'Greetings, ' + this.name;
        return `Greetings, ${this.name}!`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age); // get fields from parent class
        this.major = major;
    }
    hasMajor() {
        return !!this.major; // returns true if has and false if not !!turns undefined into false
    }
    getDescription() {
        let description = super.getDescription();
        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`;
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();
        if (this.homeLocation) {
            greeting += ` I am visiting from ${this.homeLocation}.`;
        }
        return greeting;
    }
}

const me = new Traveler('Yuriy Piddubnyak', 40, "Kyiv");
// console.log(me.getDescription());
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());