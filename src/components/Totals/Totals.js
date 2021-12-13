import React, {useState} from "react";
import "./TotalsStyle.css";

const Totals = ({ expenses }) => {

  const [budget, setBudget] = useState(2000);
  
  // set state for edit button
  const [disabled, setDisabled] = useState(true);

  function handleBudgetClick() {
    setDisabled(!disabled);
  };

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
          <label htmlFor="budget">Budget: $</label>
          <input type="text" className="budget-title" name="budget" value={budget} disabled={disabled}
          onChange={(e) => setBudget(e.target.value)}
           />
         {/*button starts as edit: when you can edit, the button says save; if you cannot edit, button says edit */}
          {disabled === true && <input type="submit" className="budget-edit" onClick={handleBudgetClick} value="Edit" />}
          {disabled === false && <input type="submit" className="budget-edit" onClick={handleBudgetClick} value="Save" />}
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
