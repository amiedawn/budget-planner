import React from 'react';
import { TiDelete } from 'react-icons/ti';

const ExpenseItem = ({expense, handleDelete}) => {
  const {id, name, amount} = expense;
  return <li className="item">
    <div className="info">
      <div className="name" id="item1">{name}</div>
      <div className="amount" id="item2">${amount}</div>
      <button className="delete-btn" id="item3" aria-label="delete button" onClick={() => handleDelete(id)}>
        <TiDelete />
      </button>
    </div>
  </li>;
}

export default ExpenseItem;