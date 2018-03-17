function square(x) {
    return x * x;
};

console.log(square(3));

const squareArrow = (x) => {
    return x * x;
};
console.log(squareArrow(11));

const smallSquareArrow = (x) => x * x;

console.log(smallSquareArrow(15));

const getFirstName = (fullName) => fullName.split(' ')[0];

console.log(getFirstName('Mike Smith'));

const getNewFirstName = (fullName) => {
    return fullName.split(' ')[0];
};

console.log(getNewFirstName('Mike Smith'));