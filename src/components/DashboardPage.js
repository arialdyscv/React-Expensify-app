import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilter from './ExpenseListFilter';
import ExpensesSummary from './ExpensesSummary';
import Header from '../components/Header';


const ExpenseDashboardPage = () => (
   <div>
      <ExpensesSummary />
      <ExpenseListFilter />
      <ExpenseList />
   </div>
);

export default ExpenseDashboardPage;