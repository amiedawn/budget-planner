//import React, { Component } from 'react';
import React from 'react';
import './AddExpenseStyle.css';

const AddExpenseForm = ({ name, amount, handleName, handleAmount, handleSubmit }) => {
  return <form className="add-expense-container" onSubmit={handleSubmit}>
      <h2 className="add-expense-title">Add Expense</h2>
      <div className="form-layout">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" name="name" 
          value={name} onChange={handleName}
          />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Cost</label>
          <input type="text" className="form-control" name="amount" id="amount"
          value={amount} onChange={handleAmount}
          />
        </div>
      </div>
      <div>
        <button type="submit" className="btn-save">Save</button>
      </div>
    </form>;
}

export default AddExpenseForm;