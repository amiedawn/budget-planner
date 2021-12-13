import React, { useState } from 'react';
import './App.css';
import AddExpenseForm from './components/AddExpense/AddExpenseForm';
import Expenses from './components/Expenses/Expenses';
import Totals from './components/Totals/Totals';
import {v4 as uuidv4 } from 'uuid';

const initialExpenses = [
  {
    id: uuidv4(),
    name: "Shopping",
    amount: "50",
  },
  {
    id: uuidv4(),
    name: "Vacation",
    amount: "300",
  },
  {
    id: uuidv4(),
    name: "Transportation",
    amount: "70",
  },
  {
    id: uuidv4(),
    name: "Gas",
    amount: "400",
  },
  {
    id: uuidv4(),
    name: "Child Care",
    amount: "500",
  },
  {
    id: uuidv4(),
    name: "Pet Care",
    amount: "40",
  },
  {
    id: uuidv4(),
    name: "Christmas",
    amount: "800",
  },
];

function App() {
  // all expenses, add expense
  const [expenses, setExpenses] = useState(initialExpenses);
  // single name
  const [name, setName] = useState(" ");
  // single amount
  const [amount, setAmount] = useState(" ");

  // record anything that is typed in the name field
  const handleName = (e) => {
    setName(e.target.value);
  };

  // record anything typed in the amount field
  const handleAmount = (e) => {
    setAmount(e.target.value);
  };

  // don't let form re-render constantly
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name !== "" && amount > 0) {
      const singleExpense = { id: uuidv4(), name: name, amount: amount };
      setExpenses([...expenses, singleExpense]); // add new expense to previous list
      setName("");
      setAmount("");
    } else {
      // handle alert called
      alert("Please enter a valid expense!");
    }
  };



  // delete an expense
  const handleDelete = (id) => {
    let tempExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(tempExpenses);
  };

  return (
    <div className="App">
      <Totals expenses={expenses} />
      <Expenses expenses={expenses} handleDelete={handleDelete} />
      <AddExpenseForm
        name={name}
        amount={amount}
        handleName={handleName}
        handleAmount={handleAmount}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default App;
