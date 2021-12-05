import React from 'react';
import './SpentStyle.css';

const Spent = ({expenses}) => {
  return (
    <div className="spent-container">
      <h3>
        <span className="spent-title">
          Spent so far: $
          {expenses.reduce((tot, curr) => {
            return (tot += parseInt(curr.amount));
          }, 0)}
        </span>
      </h3>
    </div>
  );
}

export default Spent;