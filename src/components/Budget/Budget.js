import React from 'react';
import './BudgetStyle.css';

function Budget(props) {
  return (
    <div className="budget-container">
      <h3 className="budget-title">Budget: $2000</h3>
      <button className="budget-edit">Edit</button>
    </div>
  );
}

export default Budget;