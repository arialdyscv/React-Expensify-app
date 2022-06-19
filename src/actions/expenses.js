import uuid from "uuid";
import { App, DB } from "../firebase/firebase"; 
import { 
  getDatabase, ref, get, set, update, remove, push, onValue, off, child, 
  onChildRemoved, onChildChanged, onChildAdded } from 'firebase/database';

// ADD_EXPENSE
export const addExpense = (expense) => ({
  type: "ADD_EXPENSE",
  expense
});

// : {
//   id: uuid(),
//   description,
//   note,
//   amount,
//   createdAt,
// },

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0,
    } = expenseData;

    const expense = { description, note, amount, createdAt};

    return push(ref(DB,'expenses'), expense).then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }));
    });

  };
};

// REMOVE
export const removeExpense = ({ id } = {}) => ({
  type: "REMOVE_EXPENSE",
  id,
});

// EDIT
export const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates,
});

//SET_EXPENSES
export const setExpenses = (expenses) => ({
  type: "SET_EXPENSES",
  expenses
});


export const statSetExpenses = () => {
  return (dispatch) => {
    const dbRef = ref(DB);
    return get(child(dbRef, 'expenses')).then((snapshot) => {
      if(snapshot.exists()) {
        const expenses = []
        snapshot.forEach((childSnap) => {
          expenses.push({
            id: childSnap.key,
            ...childSnap.val(),
          });
        });
        dispatch(setExpenses(expenses))
      } else {
        console.log('No Expenses')
      }
    }).catch((error) => {
      console.log(error);
    });
  }
}
