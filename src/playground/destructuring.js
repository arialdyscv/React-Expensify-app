// const person = {
//     name: 'Arialdys',
//     age: 30,
//     location: {
//         city: 'Santo Domingo',
//         temp: 'Caloraso'
//     }
// };

// const {
//     name: nombre = 'culito',
//     age
// } = person;
// //const age = person.age;

// console.log(`${nombre} is ${age}`);

// const {
//     city: pais,
//     temp: temperature
// } = person.location

// console.log(`Hay un ${temperature} en ${pais}`);

//Object destructuring

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const {name: publisherName = 'Self-Publish' } = book.publisher

// console.log(publisherName) //Penguin, Self-Publish

//
//Array destructuring
//

const address = [ '45 San Juan Bautista', 'Santo Domingo', 'Republica Dominicana', '10011']
const [ , city, state ] = address;
console.log(`Estas en ${city}, ${state}`);

const item = ['Coffe (ice)' , '$2.00', '$2.50', '$3.75'];

const [ hotCoffe, , , lPrice ] = item;

console.log(`Here is your ${hotCoffe} Large, it'll will be ${lPrice}`);