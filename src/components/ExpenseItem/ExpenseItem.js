import React from 'react';
import { TiDelete } from 'react-icons/ti';

const ExpenseItem = ({expense}) => {
  const {id, name, amount} = expense;
  return <li className="item">
    <div className="info">
      <span className="expense">{name}</span>
      <span className="amount">${amount}</span>
      <button className="delete-btn" aria-label="delete button">
        <TiDelete />
      </button>
    </div>
  </li>;
}

export default ExpenseItem;