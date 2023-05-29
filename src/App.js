import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";
const dummy_expenses = [
  {
    id: "1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  const [expenses, setExpenses] = useState(dummy_expenses);
  //let setExpenses=()=>{}
  //[expenses,setExpenses]=useState(expenses);
  const addExpenseHandler = (newExpense) => {
    console.log("in App js");
    console.log(newExpense);
    setExpenses((prevExpenses) => {
      return [newExpense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddingExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
