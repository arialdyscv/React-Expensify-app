import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectExpenses from '../selectors/visibleExpenses';
import selectExpensesTotal from '../selectors/expenses-total';


export const ExpensesSummary = ({ expenseCount, expensesTotal}) => {
    const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00')
    return (
        <div className='page-header'>
            <div className='content-container'>
                <h1 className='page-header__title'> <span>{expenseCount}</span> {expenseWord} with total of <span>{formattedExpensesTotal}</span></h1>
                <div className='page-header__actions'>
                    <Link className='button' to='/create' >Add Exppense</Link>
                </div>
            </div>
            
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
