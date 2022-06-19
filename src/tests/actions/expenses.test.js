import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, editExpense, removeExpense, setExpenses, statSetExpenses } from "../../actions/expenses";
import expenses from "../fixtures/expenses";
import { DB } from '../../firebase/firebase';
import { ref, get, set } from 'firebase/database';

const createMockStore = configureMockStore([thunk]);

beforeEach(done => {
  const expenseDummy = {};
  expenses.forEach(({ id, description, note, amount, createdAt }) =>{
    expenseDummy[id] = { description, note, amount, createdAt};
  });
  set(ref(DB, 'expenses'), expenseDummy).then(() => done());
});

test("should setup remove expense object", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc",
  });
});

test("should setup edit expense action object", () => {
  const action = editExpense("123abc", { note: "culito" });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123abc",
    updates: {
      note: "culito",
    },
  });
});

test("should setup add expense action object", () => {
 
  const action = addExpense(expenses[1]);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: expenses[1]
  });
});

//async and await to test asyncronous
//done to tell jest when its done
test ('should add expense to database and store', done => {
  const store = createMockStore({});
  const expenseData = {
    description: "some description",
    amount: 1500,
    note: "some note",
    createdAt: 150
  };

  //check if the action is correctly dispatch
  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "ADD_EXPENSE",
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    });

    return get(ref(DB, `expenses/${actions[0].expense.id}`));

  }).then((snapshot) =>{ expect(snapshot.val()).toEqual(expenseData);
    done();//tells jest is asyncronous and to wait for the done() function
  });
});


test ('should add expense with defaults to database and store', done => {
  const store = createMockStore({});
  const expenseDefault = {
    description: "",
    amount: 0,
    note: "",
    createdAt: 0
  };

  //check if the action is correctly dispatch
  store.dispatch(startAddExpense({})).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: "ADD_EXPENSE",
      expense: {
        id: expect.any(String),
        ...expenseDefault
      }
    });

    return get(ref(DB, `expenses/${actions[0].expense.id}`));

  }).then((snapshot) =>{ expect(snapshot.val()).toEqual(expenseDefault);
    done();//tells jest is asyncronous and to wait for the done() function
  });
});

test('should setup set expense action object with data', () =>{
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses
  });
});


//async test 
test('should get the expenses from firebase', done => {
  const store = createMockStore({});
  store.dispatch(statSetExpenses()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses
    });
    done();
  });

});
