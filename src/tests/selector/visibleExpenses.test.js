import moment from "moment";
import visibleExpenses from "../../selectors/visibleExpenses";
import expenses from '../fixtures/expenses';


test("should filter by text value", () => {
  const filters = {
    text: "bill",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined,
  };
  const result = visibleExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[0]]);2
});


test("should filter by date smaller to largest (older to newer", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: undefined,
  };
  const result = visibleExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[1], expenses[0]]);
});

test("should filter by start date", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: moment(0),
    endDate: undefined,
  };
  const result = visibleExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[0]]);
});

test("should filter by end date", () => {
  const filters = {
    text: "",
    sortBy: "date",
    startDate: undefined,
    endDate: moment(0),
  };
  const result = visibleExpenses(expenses, filters);
  expect(result).toEqual([expenses[1], expenses[0]]);
});

// test("should filter by date", () => {
//   const filters = {
//     text: "",
//     sortBy: "date",
//     startDate: undefined,
//     endDate: undefined,
//   };
//   const result = visibleExpenses(expenses, filters);
//   expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
// });

test("should filter by amount", () => {
  const filters = {
    text: "",
    sortBy: "amount",
    startDate: undefined,
    endDate: undefined,
  };
  const result = visibleExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[1], expenses[0]]);
});
  
