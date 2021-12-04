import React from "react";
import "./AddExpenseStyle.css";

const AddExpenseForm = ({
  name,
  amount,
  handleName,
  handleAmount,
  handleSubmit,
}) => {
  return (
    <form className="add-expense-container" onSubmit={handleSubmit}>
      <h2 className="add-expense-title">Add Expense</h2>
      <tr>
        <th className="expense-header">
          <label htmlFor="name">Name</label>
        </th>
        <th className="expense-header">
          <label htmlFor="amount">Cost</label>
        </th>
      </tr>
      <tr>
        <td>
          {" "}
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={name}
            onChange={handleName}
          />
        </td>
        <td>
          <input
            type="text"
            className="form-control"
            name="amount"
            id="amount"
            value={amount}
            onChange={handleAmount}
          />
        </td>
      </tr>

      <button type="submit" className="btn-save">
        Save
      </button>
    </form>
  );
};

export default AddExpenseForm;
