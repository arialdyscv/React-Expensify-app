import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/visibleExpenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expenseCount, expensesTotal}) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00')
    return (
        <div>
            <h1> {expenseCount} {expenseWord} with total of {formattedExpensesTotal}</h1>
        </div>
    );
}

const mapStateToProps = (state) => {
    const VisibleExpenses = selectExpenses(state.expenses, state.filters);

    return {
        expenseCount: VisibleExpenses.length,
        expensesTotal: selectExpensesTotal(VisibleExpenses)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);
