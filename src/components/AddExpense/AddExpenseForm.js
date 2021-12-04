import React from "react";
import "./AddExpenseStyle.css";

const AddExpenseForm = ({name, amount, handleName, handleAmount, handleSubmit}) => {
  return (
   <form onSubmit={handleSubmit}>
    <div className="form-center">
      <div className="form-group">
        <label htmlFor="charge">Charge</label>
        <input type="text" className="form-control" id="name" name="name" value={name} onChange={handleName} />
      </div>
    
      <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input type="text" className="form-control" id="amount" name="amount" value={amount} onChange={handleAmount} />
      </div>
    </div>
    <button type="submit" className="btn" onSubmit={handleSubmit}>Save</button>
    </form>
  );
};

export default AddExpenseForm;
