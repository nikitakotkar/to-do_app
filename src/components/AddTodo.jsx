import { useState } from "react";

function AddTodo({onNewItem})
{

     const [todoName,setTodoName] = useState("");
     const [dueDate, setDueDate] = useState("");

     const handleNameChange = (event) =>{
          setTodoName(event.target.value);
     }

     const handleDateChange = (event) => {
          setDueDate(event.target.value);
     }
     
     const handleAddButtononCLicked = () => {
           onNewItem(todoName,dueDate);
           setDueDate("");
           setTodoName("");
     }

    return (
    
    <div className="row">
    <div className="col-4">
         <input placeholder="Enter Todo Here" value={todoName} onChange={handleNameChange}/>
    </div>
    <div className="col-4">
         <input type="date" placeholder="Enter ToDoName Here" value={dueDate} onChange={handleDateChange}/>
    </div>
    <div className="col-2">
    <button type="button"  className="btn btn-success" onClick={handleAddButtononCLicked}>Add</button>
    </div>
  </div>
  

  );
}

export default AddTodo;