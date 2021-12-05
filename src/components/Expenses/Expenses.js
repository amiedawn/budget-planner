import React, { useState } from "react";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./ExpensesStyle.css";

const Expenses = ({ expenses, handleDelete }) => {
  const [query, setQuery] = useState(" ");
  return (
    <div className="expenses-container">
      <div className="search-section">
        <h2>Expenses</h2>
        <input
          className="expense-input"
          placeholder="Type to search..."
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>
      <ul className="expense-list">
        {expenses
          .filter((expense) => {
            if (query === "") {
              return (
                <ExpenseItem
                  key={expense.id}
                  expense={expense}
                  handleDelete={handleDelete}
                />
              );
            } else if (
              expense.name.toLowerCase().includes(query.toLowerCase())
            ) {
              return expense;
            }
          })
          .map((expense, index) => {
            return (
              <ExpenseItem
                key={expense.id}
                expense={expense}
                handleDelete={handleDelete}
              />
            );
          })}
      </ul>
    </div>

    // <div className="expenses-container">
    //   <ul className="expense-list">
    //       {expenses.map((expense) => {
    //         return <ExpenseItem key={expense.id} expense={expense} handleDelete={handleDelete} />;
    //       })}
    //     </ul>
    // </div>
  );
};

export default Expenses;
