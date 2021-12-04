import React from 'react';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import './ExpensesStyle.css';

const Expenses = ({ expenses, handleDelete }) => {  
  return (
    <div className="expenses-container">
      <h2 id="expenses-title">Expenses</h2>
      <form className="search">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Type to search..."
        />
        <ul className="expense-list">
          {expenses.map((expense) => {
            return <ExpenseItem key={expense.id} expense={expense} handleDelete={handleDelete} />;
          })}
        </ul>
      </form>
    </div>
  );
}

export default Expenses;