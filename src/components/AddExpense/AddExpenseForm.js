import React from "react";
import "./AddExpenseStyle.css";

const AddExpenseForm = ({name, amount, handleName, handleAmount, handleSubmit}) => {
  return (
   <form onSubmit={handleSubmit}>
    <div className="form-container">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" className="form-control" id="name" name="name" value={name} onChange={handleName} />
      </div>
    
      <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input type="text" className="form-control" id="amount" name="amount" value={amount} onChange={handleAmount} />
      </div>
    </div>
    <button type="submit" className="btn-save" onSubmit={handleSubmit}>Save</button>
    </form>
  );
};

export default AddExpenseForm;
