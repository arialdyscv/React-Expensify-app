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
