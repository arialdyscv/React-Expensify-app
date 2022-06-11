import moment from "moment";
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setEndDate,
  setStartDate,
} from "../../actions/filters";

test("Should generate set start date action object", () => {
  const action = setStartDate(moment(100));
  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate: moment(100),
  });
});

test("Should generate set end date action object", () => {
  const action = setEndDate(moment(100));
  expect(action).toEqual({
    type: "SET_END_DATE",
    endDate: moment(100),
  });
});

test("Should generate set text action object", () => {
  const action = setTextFilter("Something");
  expect(action).toEqual({
    type: "SET_TEXT",
    text: "Something",
  });
});

test("Should generate set text action object with default", () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: "SET_TEXT",
    text: "",
  });
});

test("Should generate sort by date action object", () => {
  const action = sortByDate();
  expect(action).toEqual({ type: "SORT_BY_DATE" });
});

test("Should generate sort by date action object", () => {
  const action = sortByAmount();
  expect(action).toEqual({ type: "SORT_BY_AMOUNT" });
});
