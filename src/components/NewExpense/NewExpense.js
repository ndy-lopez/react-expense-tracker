import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [formVisibility, setFormVisibility] = useState(false);

  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const startForm = () => {
    setFormVisibility(true);
  };

  return (
    <div className="new-expense">
      {!formVisibility && <button onClick={startForm}>Add New Expense</button>}
      {formVisibility && (
        <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />
      )}
    </div>
  );
};

export default NewExpense;
