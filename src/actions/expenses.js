//import uuid from "uuid";
import { DB } from "../firebase/firebase"; 
import { ref, get, set, update, remove, push, child } from 'firebase/database';

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

//ADDS to the Database
export const startAddExpense = (expenseData = {}) => {
  //getState function to get the uid of the user
  return (dispatch, getState) => {
    const uid = getState().auth.uid //this will give us access to the user id (uid)
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0,
    } = expenseData;

    const expense = { description, note, amount, createdAt};

    return push(ref(DB,`users/${uid}/expenses`), expense).then((ref) => {
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
  id
});

//REMOVES from Database
export const startRemoveExpense = ( { id } = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    return remove(ref(DB, `users/${uid}/expenses/${id}`)).then(() => {
      dispatch(removeExpense({ id }));

    });
  }
};

// EDIT
export const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates,
});

export const startEditExpense = ( id, updates ) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return update(ref(DB, `users/${uid}/expenses/${id}`), updates).then(() => {
      dispatch(editExpense(id, updates));
    });
  }
}

//SET_EXPENSES
export const setExpenses = (expenses) => ({
  type: "SET_EXPENSES",
  expenses
});

//GETS list of expenses from Database
export const statSetExpenses = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid
    const dbRef = ref(DB);
    return get(child(dbRef, `users/${uid}/expenses`)).then((snapshot) => {
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
