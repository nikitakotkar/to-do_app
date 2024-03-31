function TodoItems({todoName , todoDate , onDeleteClick})
{
    return (
    
    <div className="container">
    <div className="row">

    <div className="col-4"> {todoName} </div>
    <div className="col-4"> {todoDate}  </div>
    <div className="col-2">
       <button type="button" className="btn btn-danger" id="btn" onClick={() => onDeleteClick(todoName)}>Delete</button>
    </div>

    </div>
    </div>

    )
}

export default TodoItems;