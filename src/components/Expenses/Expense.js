import './Expense.css';
import ExpenseItem from './ExpenseItem.js';
import Card from '../UI/Card.js';

const Expense = (props) => {
    return (
        <Card className = "expenses">
            <ExpenseItem
                title={props.items[0].title}
                amount={props.items[0].amount}
                date={props.items[0].date}
            />
            <ExpenseItem
                title={props.items[1].title}
                amount={props.items[1].amount}
                date={props.items[1].date}
            />
            <ExpenseItem
                title={props.items[2].title}
                amount={props.items[2].amount}
                date={props.items[2].date}
            />
            <ExpenseItem
                title={props.items[3].title}
                amount={props.items[3].amount}
                date={props.items[3].date}
            />
        </Card>
//부모components에 값을 전달하기 위해서 props를 쓴다.
    );
}

export default Expense;