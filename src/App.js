import './App.css';
import AddExpense from './components/AddExpense/AddExpense';
import Budget from './components/Budget/Budget';
import Expenses from './components/Expenses/Expenses';
import Remaining from './components/Remaining/Remaining';
import Spent from './components/Spent/Spent';

function App() {
  return (
    <div className="App">
      <h1>My Budget Planner</h1>
      <div className="wrapper">
        <div>
          <Budget />
        </div>
        <div>
          <Remaining />
        </div>
        <div>
          <Spent />
        </div>
      </div>
      <Expenses />
      <AddExpense />
    </div>
  );
};

export default App;
