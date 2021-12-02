import React from 'react';
import './ExpensesStyle.css';

function Expenses(props) {
  return (
    <div className="expenses-container">
      <h2>Expenses</h2>
      <form className="search">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Type to search..."
        />
        <table id="expenseTable">
          <tbody>
            <tr className="expense-row">
              <td id="expense-name">Shopping</td>
              <td id="expense-amount">$50</td>
              <td id="expense-remove">
                <span className="material-icons-round">cancel</span>
              </td>
            </tr>
          </tbody> 
        </table>
      </form>
    </div>
  );
}

export default Expenses;