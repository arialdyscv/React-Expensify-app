import React from "react";
import { shallow } from 'enzyme';
import ExpenseForm from "../../components/ExpenseForm";
import expenses from '../fixtures/expenses';
import moment from "moment";
import { NoEmitOnErrorsPlugin } from "webpack";


test('should render ExpenseForm correctly', () =>{
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm correctly with expense data', () =>{
    const wrapper = shallow(<ExpenseForm expense={expenses[2]}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submition', () =>{
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot(); //snap before changes
    wrapper.find('form').simulate('submit', { preventDefault: () =>{} });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot(); //snap with error changes
});

test('should set description on input change', () => {
    const value = 'new desc to test';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('description')).toBe(value);
});

test('should set note on textarea change', () => {
    const value = 'new note to test';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').simulate('change', { persist: () => {},
        target: { value }
    });
    expect(wrapper.state('note')).toBe(value);
});

test('should set amount on valid input change', () => {
    const value = '23.50';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('amount')).toBe(value);
});

test('should not set amount on invalid input change', () => {
    const value = '12.553';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('amount')).toBe("");
});

test("should call onSubmit prop for valid form submission", () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt:expenses[0].createdAt
    });
});

test("should set new date on date change", () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set calendar focus on focus change', () => {
    const focused = true;
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({ focused });
    expect(wrapper.state('calendarFocused')).toBe(focused);
});
