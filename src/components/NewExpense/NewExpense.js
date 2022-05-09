import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const [showNewExpense, setShowNewExpense] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        props.onAddExpense(expenseData);
        setShowNewExpense(false);
    };

    const toggleNewExpense = () => {
        setShowNewExpense(true);
    };

    const cancelHandler = () => {
        setShowNewExpense(false);
    };

    return (
        <div className="new-expense">
            {!showNewExpense && (
                <button onClick={toggleNewExpense} type="submit">
                    Add New Expense
                </button>
            )}
            {showNewExpense && (
                <ExpenseForm
                    onSaveExpenseData={saveExpenseDataHandler}
                    onCancelHandler={cancelHandler}
                />
            )}
        </div>
    );
};

export default NewExpense;
