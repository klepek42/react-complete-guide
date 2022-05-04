import React, { useState } from 'react';

import Card from '../UI/Card';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import ExpensesList from './ExpensesList';
import './Expenses.css';

const Expenses = (props) => {
    const [selectedFilter, setSelectedFilter] = useState('2021');

    const filterChangeHandler = (filterData) => {
        setSelectedFilter(filterData);
    };

    const filteredExpenses = props.items.filter(
        (expense) => expense.date.getFullYear().toString() === selectedFilter
    );

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selected={selectedFilter}
                    onChangeFilter={filterChangeHandler}
                />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    );
};

export default Expenses;
