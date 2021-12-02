//import React, { Component } from 'react';
import React from 'react';
import './AddExpenseStyle.css';

// class AddExpense extends React.Component {
//   constructor(props) {
//     super(props);

  // }
function AddExpenseForm()   {
  return (
    <form className="add-expense-container">
      <h2 className="add-expense-title">Add Expense</h2>
      <div className="input-expense">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
      </div>
      <div className="input-expense">
        <label htmlFor="cost">Cost</label>
        <input type="text" name="cost" id="cost" />
      </div>
      <div>
        <input type="submit" className="btn-save" value="Save" />
      </div>
    </form>
  );
}

export default AddExpenseForm;