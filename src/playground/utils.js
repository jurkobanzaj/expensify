console.log("utils.js is connected");

export const square = (x) => x * x;

export const add = (a, b) => a + b; // alternative to export { add }; 

// const substract = (a, b) => a - b;

// export { substract as default }; // other way to do default export is
// export default substract; // more simple

export default (a, b) => a - b; // or even like this

// export { square, add }; // named export