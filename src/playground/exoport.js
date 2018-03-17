// // import "./utils.js";

// import { square, add } from "./utils.js"; // named import from utils.js
// import substract from "./utils"; // default import. In file name we can skip file extention
// // imported function name can be anything
// console.log("app.js is running!");
// console.log(square(16));
// console.log(add(100, 16));
// console.log(substract(100, 67));

import { isAdult, canDrink } from "./person";
import isSenior from "./person";
console.log("Is adult", isAdult(18));
console.log("Can drink", canDrink(18));
console.log("Is senior", isSenior(45));

