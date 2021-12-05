import React, { useState } from 'react';
import './App.css';
import AddExpenseForm from './components/AddExpense/AddExpenseForm';
import Budget from './components/Budget/Budget';
import Expenses from './components/Expenses/Expenses';
import Remaining from './components/Remaining/Remaining';
import Spent from './components/Spent/Spent';
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
    let tempExpenses = expenses.filter((record) => record.id !== id);
    setExpenses(tempExpenses);
  };

  // search function
  // const [query, setQuery] = useState(" ");

  return (
    <div className="App">
      <h1>My Budget Planner</h1>
      <div className="wrapper">
        <div>
          <Budget />
        </div>
        <div>
          <Remaining expenses={expenses} />
        </div>
        <div>
          <Spent expenses={expenses} />
        </div>
      </div>
     
      {/* <div>
        <h2>Expenses</h2>
        <input
          placeholder="Type to search..."
          onChange={(event) => setQuery(event.target.value)}
        />
        {
          expenses.filter(expense => {
            if (query === "") {
              return expense;
            } else if (
              expense.name.toLowerCase().includes(query.toLowerCase())
            ) {
              return expense;
            }
          })
          .map((expense, index) => (
            <ul>
              <li key={expense.id}>{expense.name}</li>
            </ul>
          ))
        }
      </div> */}

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
