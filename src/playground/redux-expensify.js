import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE

const addExpense = (
    {
        description = '', 
        note = '', 
        amount = 0, 
        createAt = 0
    } = {} 
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createAt
    }
})

// REMOVE

const removeExpense = ({ id } = {}) =>({
    type: 'REMOVE_EXPENSE',
    id
});


// EDIT
const editExpense = ( id, updates ) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

/////////////////////////

// SET TEXT

const setTextFilter = ( text = '' ) => ({
    type: 'SET_TEXT',
    text
});

// SORT BY DATE

const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

// SORT BY AMOUNT

const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

// SET START DATE
const setStartDate = ( startDate = undefined ) => ({
    type: 'SET_START_DATE',
    startDate
});

// SET END DATE
const setEndDate = ( endDate = undefined ) => ({
    type: 'SET_END_DATE',
    endDate
});


//Expenses Reducer

const expenseReducerDefaultState = [];

const expenseReducer = (state = expenseReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id)
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                } else {
                    return expense;
                }
            })
        default:
            return state;
    }
};

// Filter Reducer

const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filterReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT':
            return {
                ...state,
                text: action.text
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_START_DATE':
            return {
                ...state,
                endDate: action.endtDate
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        default:
            return state;
    }
};

/* Timestamps (milliseconds)
january 1st 1970 (unix epoch) this is equal to 0 */

// Get visible expenses

const getVisibleExpenses = ( expenses, { text, sortBy, startDate, endDate } ) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createAt <= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createAt >= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase()) 

        return startDateMatch && endDateMatch && textMatch

    }).sort((a, b) => {
        if(sortBy === 'date') {
            return a.createAt < b.createAt ? 1 : -1;
        }else if (sortBy === 'amount') {
            return a.amount > b.amount ? 1 : -1;
        }
    });

};

// Store Creation

const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filters: filterReducer

    })
);

store.subscribe(() => {
    const state = store.getState();
    const VisibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(VisibleExpenses);
   
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createAt: -200}));
const expenseTwo = store.dispatch(addExpense({ description: 'coffe', amount: 3.75, createAt: 1000}));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// store.dispatch(editExpense( expenseTwo.expense.id, { amount: 5.50}))

//store.dispatch(setTextFilter( 'rent' ));
//store.dispatch(setTextFilter());
// store.dispatch(setStartDate());
// store.dispatch(setEndDate());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());



const demoState = {
    expense: [{
        id: 'asd',
        description: 'Jan Rent',
        note: 'This was the final payment',
        amount: 54500,
        createdAt: 0
    }],

    filter: {
        text: 'rent',
        sortBy: 'amount', // date or amount
        startDate: undefined,
        endDate: undefined
    }
};