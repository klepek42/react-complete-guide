import React, { useState } from 'react';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import './Expenses.css';

const Expenses = (props) => {
    const [selectedFilter, setSelectedFilter] = useState('2022');

    const filterChangeHandler = (filterData) => {
        setSelectedFilter(filterData);
    };

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selected={selectedFilter}
                    onChangeFilter={filterChangeHandler}
                />
                {props.items.map((expense) => (
                    <ExpenseItem
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))}
            </Card>
        </div>
    );
};

export default Expenses;
