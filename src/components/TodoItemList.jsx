// TodoItemList.js
import React from "react";
import TodoItems from "./TodoItems";

const TodoItemList = ({ todoItems, onDeleteClick }) => {
    return (
        <div className="item-container"> 
            {todoItems.map(item => (
                <TodoItems 
                    key={item.name} 
                    todoDate={item.dueDate} 
                    todoName={item.name} 
                    onDeleteClick={onDeleteClick} 
                />
            ))}
        </div>
    );
}

export default TodoItemList;
