import './ExpenseItem.css';

function ExpenseItem() {
    return (
        <div className="expense-item">
            <div>17.07.2021</div>
            <div className="expense-item__description">
                <h2>Autoversicherung</h2>
                <div className="expense-item__price">294,50€</div>
            </div>
        </div>
    );
}

export default ExpenseItem;
