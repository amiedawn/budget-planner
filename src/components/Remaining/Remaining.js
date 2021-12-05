import React from 'react';
import './RemainingStyle.css';

const Remaining = ({expenses, tot}) => {
  let remaining = 2000 - {tot}
  return (
    <div className="remaining-container">
      <h3 className="remaining-title">Remaining: ${remaining}</h3>
    </div>  
  );
}

export default Remaining;