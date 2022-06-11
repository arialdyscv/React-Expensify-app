import { createStore } from 'redux';
//state = {element: default value}, 


//Action Generators

const incrementCount = ({ incrementBy = 1 } = {}) => ( {
    type: 'INCREMENT',
    incrementBy
});


const decrementCount = ({ decrementBy = 1 } = {}) => ( {
    type: 'DECREMENT',
    decrementBy
});

const resetCount = () => ( {
    type: 'RESET'
});

const setCount = ({ count }) => ( {
    type: 'SET',
    count
    
});

//Reducers
// 1. Reducers are pure functions
// 2. Never change state or action


const countReducer = (state = { count: 0 }, action ) => {
    switch (action.type) {
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + incrementBy
            };
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - decrementBy
            };
        case 'RESET':
            return {
                count: 0
            };
        case 'SET':
            return { 
                count: action.count
            };
        default:
            return state;
    }
 
};

const store = createStore(countReducer());



//subscribe runs every time the state changes
const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

// if its called again it will stop running
//unsubscribe();


//Actions - object that gets sent to the store

// dispatch is use to update state 
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(incrementCount({ incrementBy: 5 }));


// //INCREMENT is used to increment
// store.dispatch({
//     type: 'INCREMENTT'
// });

store.dispatch(incrementCount());

//RESET is used to set value to default
store.dispatch(resetCount());

//DECREMENT is used to decrement
store.dispatch(decrementCount(5));

//SET is used to override and set the value to the one indicated.
store.dispatch(setCount({count : 50}));