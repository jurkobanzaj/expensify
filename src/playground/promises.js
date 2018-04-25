const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('This is my resolved data'); // fires if promise fullfilled
        resolve({
            name: 'Yuriy',
            age: 40
        });
        // reject('Something went wrong'); // fires if promise failed
    }, 1500);
});

promise
    .then((data) => { // then for resolved = successful promise
        console.log(data); // second argument to then is treated as catch automaticly
        // return 'something'; // this 'something' will be passed to next then as argument (str in this case)
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('This is my other promise');
            }, 1500);
        });
    })
    .then((str) => {
        console.log('does this run?', str); // returns 'does this run?' and 'something'!
    })
    .catch((error) => { // catch for rejected promise
        console.log('error: ', error);
});