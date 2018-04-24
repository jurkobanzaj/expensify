const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('This is my resolved data'); // fires if promise fullfilled
        reject('Something went wrong'); // fires if promise failed
    }, 1500);
});

promise.then((data) => { // then for resolved = successful promise
    console.log(data); // second argument to then is treated as catch automaticly
}).catch((error) => { // catch for rejected promise
    console.log('error: ', error);
});