import expensesReducer from "../../reducers/expensesReducer";
import expenses from '../fixtures/expenses';

//test to verify expenses can be handle

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);

});


test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    
    const expense = {
        id: "c1",
        description: "culito expense",
        note: "",
        amount: 1500,
        createdAt: 0
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([...expenses,expense]);
});

test('should  edit an expense', () => {
    const amount = 55000;
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: {
            amount
        }
    };
    const state = expensesReducer(expenses,action);
    expect(state[0].amount).toBe(amount);
    
});

test('should not edit expense if expense not found', () => {
    
    const amount = 55000;
    const action = {
        type: 'EDIT_EXPENSE',
        id: '33',
        updates: {
            amount
        }
    };
    const state = expensesReducer(expenses,action);
    expect(state).toEqual(expenses);
});

test('should set expenses', () => {
   
    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[1]]
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1]]);
});

