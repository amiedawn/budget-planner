import React from 'react';
import './SpentStyle.css';

const Spent = (props) => {
  return (
    <div className="spent-container">
      <h3 className="spent-title">Spent so far: ${props.totalExpenses}</h3>
    </div>
  );
}

export default Spent;