const promise = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve({
            data1:'This is my resolved data',
            data2: 'resolve data 2'
        });
        reject('something went wrong!');
    }, 5000);
    
});

console.log('before');

promise.then((data) =>{
    console.log('1', data);

    return 'some data'
}).then((str) =>{
    console.log('does this run?', str);
}).catch((error) => {
    console.log('error', error)
})

//Different syntax same result

// promise.then((data) =>{
//     console.log('1', data);
// },(error) => {
//     console.log('error', error)
// })

console.log('after');