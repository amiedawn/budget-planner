import './App.css';
import AddExpense from './components/AddExpense/AddExpense';
import Budget from './components/Budget/Budget';
import Expenses from './components/Expenses/Expenses';
import Remaining from './components/Remaining/Remaining';
import Spent from './components/Spent/Spent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>My Budget Planner</h2>
      </header>
      <Budget />
      <Remaining />
      <Spent />
      <Expenses />
      <AddExpense />
    </div>
  );
};

export default App;
