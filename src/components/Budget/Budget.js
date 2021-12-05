import React from 'react';
import './BudgetStyle.css';

function Budget(props) {
  let budget = 2000;
  return (
    <div className="budget-container">
      <h3 className="budget-title">Budget: ${budget}</h3>
      <button className="budget-edit">Edit</button>
    </div>
  );
}

export default Budget;