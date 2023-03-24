import './TodoItem.css'
import TodoDate from "./TodoDate";
import Card from "./Card";


const TodoItem = (props) => {

    return (
        <li>
            <Card className="todo-item">
                <TodoDate date={props.date}></TodoDate>
                <div className="todo-item__description">
                    <h2>{props.title}</h2>
                    <div className="todo-item__price">{props.amount}</div>
                </div>
            </Card>
        </li>
    )

}

export default TodoItem
