// App.js
import React, { useState } from "react";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItemList from "./components/TodoItemList";
import './App.css';
import WelcomeMsg from "./components/WelcomeMsg";

function App() {
    const [todoItems, setTodoItems] = useState([]);

    const handleNewItem = (itemName, itemDueDate) => {
        console.log('New Item added');
        const newTodoItems = [...todoItems, { name: itemName, dueDate: itemDueDate }];
        setTodoItems(newTodoItems);
    }

    const handleDeleteItem = (todoItemName) => {
        const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
        setTodoItems(newTodoItems);
    }

    return (
        <div className="todo-container"> 
            <AppName/>
            <AddTodo onNewItem={handleNewItem}/>
            {todoItems.length === 0 && <WelcomeMsg/>}
            <TodoItemList todoItems={todoItems} onDeleteClick={handleDeleteItem}/>  
        </div>
    );
}

export default App;
