import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

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
  const expenseData = {
    description: "Some Description",
    amount: 1500,
    createdAt: 100000,
    note: "some note"
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
        ...expenseData,
        id: expect.any(String)
    }
  });
});

test("should setup add expense action object with default", () => {
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
        description: "",
        note: "",
        amount: 0,
        createdAt: 0,
        id: expect.any(String)
    },
  });
});
