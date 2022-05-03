import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
    const [selectedFilter, setSelectedFilter] = useState('2021');

    const filterChangeHandler = (filterData) => {
        setSelectedFilter(filterData);
    };

    const filteredExpenses = props.items.filter(
        (expense) => expense.date.getFullYear().toString() === selectedFilter
    );

    let expensesContent = <p>No expenses found.</p>;

    if (filteredExpenses.length > 0) {
        expensesContent = filteredExpenses.map((expense) => (
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        ));
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selected={selectedFilter}
                    onChangeFilter={filterChangeHandler}
                />
                {expensesContent}
            </Card>
        </div>
    );
};

export default Expenses;
