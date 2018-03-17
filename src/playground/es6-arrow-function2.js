const add = function(a, b) {
    console.log(arguments); // not available in errow function
    return a + b;
};

console.log(add(55, 11, 100));

const user = {
    name: 'Yuriy',
    cities: ['Kyiv', 'Lviv', 'Bangkok'],
    printPlacesLived() {
    // printPlacesLived: function () {
        // console.log(this.name);
        // console.log(this.cities);
        // const that = this;

        return this.cities.map((city) => this.name + ' has lived in ' + city);
        // this.cities.forEach((city) => {
        //     // console.log(that.name + ' has lived in ' + city);
        //     console.log(this.name + ' has lived in ' + city);
        // });
    }
};

console.log(user.printPlacesLived());

const multiplyer = {
    numbers: [32, 276,90],
    multiplyBy: 11,
    multiply() {
        return this.numbers.map((number) => this.multiplyBy * number);
    }
};

console.log(multiplyer.multiply());