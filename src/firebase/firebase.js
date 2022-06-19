// https://firebase.google.com/docs/web/setup#available-libraries
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { 
    getDatabase, 
    ref, get, set, 
    update, remove, push, 
    onValue, off, child, 
    onChildRemoved, onChildChanged, onChildAdded } from 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_API_ID
};

// Initialize Firebase
export const App = initializeApp(firebaseConfig);
export const DB = getDatabase();
//const RefDB = ref(DB);

//changed child

// onChildChanged(ref(DB, 'expenses'),(snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

//added child

// onChildAdded(ref(DB, 'expenses'),(snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });


//removed child

// onChildRemoved(ref(DB, 'expenses'),(snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });


//get data once

// get(ref(DB, 'expenses'))
// .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnap) => {
//         expenses.push({
//             id: childSnap.key,
//             ...childSnap.val()
//         });
//     });

//     console.log(expenses);
// });


//get data and stay connected.

// onValue(ref(DB, 'expenses'),(snapshot) => {
//     const expenses = []
//     snapshot.forEach((childSnap) => {
//         expenses.push({
//             id: childSnap.key,
//             ...childSnap.val()
//         });    
//     });
//     console.log(expenses);
// });


// push(ref(DB, 'expenses'),
//     {
//         description: 'first expense',
//         note: 'note 1',
//         amount: 150,
//         createdAt: 0,
      
//     }
// );

//update(ref(DB,'notes/-N4npG19f6K4qW6r8Gy3'), { body: 'updates body'})

//remove(ref(DB,'notes/-N4npG19f6K4qW6r8Gy3'))

//adding data to database 
// push(ref(DB, 'notes'), {
//         title: 'two note',
//         body: 'something new'
//     }
// )


//this method gets saved but the ID is the index of the array which is not ideal, therefore not used
/*const notes = [{id: '1', title: 'one note'}, {id: '2', title: 'two note'}];
set(ref(DB,'notes'), notes);*/

//fetching data example

// onValue( RefDB, (snapshot) => {
//         const val = snapshot.val();
//         console.log(`${val.name} is a ${val.Occupation} at ${val.location.city}`)
//     }, (e) => {
//         console.log( 'Error fetching data: ', e)
//     }
// );


// set(ref(DB), { 
//     name:'Arialdiino',
//     age: 31,
//     hasCovid: false,
//     Occupation: 'Software Dev Student',
//     location: {
//         city: 'Santo Domingo',
//         state: 'DN'
//     },

// }).then(() =>{
//     console.log('Data saved.')
// }).catch((e) =>{
//     console.log('This failed', e)
// });

// update(ref(DB), {
//     attributes: {
//         height: 170,
//         weight: 179,
//         hair: 'black'
//     }
// }).then(() =>{
//     console.log('Data updated.')
// }).catch((e) =>{
//     console.log('Update failed: ', e)
// });


// remove(ref(DB, 'hasCovid'))
// .then(() => {
//     console.log('data deleted.')
// }).catch((e) => {
//     console.log( 'Error: ', e)
// });


// update(ref(DB), { 'attributes/weight': 170 })
// .then(() => {
//     console.log('data updated')
// }).catch((e) => {
//     console.log( 'Update failed: ', e)
// });



