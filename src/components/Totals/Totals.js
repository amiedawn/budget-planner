import React from "react";
import "./TotalsStyle.css";

const Totals = ({ expenses }) => {
  let budget = 2000;
  
  let totalSpent = 
    expenses.reduce((tot, curr) => {
      return (tot += parseInt(curr.amount));
    }, 0);
  
 
  let remaining = budget - totalSpent;

  return (
    <>
      <h1>My Budget Planner</h1>
      <div className="wrapper">
        <div className="budget-container">
          <h3 className="budget-title">Budget: ${budget}</h3>
          <button className="budget-edit">Edit</button>
        </div>
        <div className="remaining-container">
          <h3 className="remaining-title">Remaining: ${remaining}</h3>
        </div>
        <div className="totals-container">
          <h3 className="totals-title">
            Spent so far: ${totalSpent}
          </h3>
        </div>
      </div>
    </>
  );
};

export default Totals;
