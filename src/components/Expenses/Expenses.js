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
        <Card className="expenses">
            <ExpensesFilter
                selected={selectedFilter}
                onChangeFilter={filterChangeHandler}
            />
            <ExpenseItem
                title={props.data[0].title}
                amount={props.data[0].amount}
                date={props.data[0].date}
            />
            <ExpenseItem
                title={props.data[1].title}
                amount={props.data[1].amount}
                date={props.data[1].date}
            />
            <ExpenseItem
                title={props.data[2].title}
                amount={props.data[2].amount}
                date={props.data[2].date}
            />
            <ExpenseItem
                title={props.data[3].title}
                amount={props.data[3].amount}
                date={props.data[3].date}
            />
        </Card>
    );
};

export default Expenses;
