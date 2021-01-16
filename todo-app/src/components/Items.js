import React from 'react'

function Items({todos, deleteTodo}) {

    const todoList = todos.length ? ( 
    todos.map(todo=>{
        return(
            <li className='list' onClick={()=>deleteTodo(todo.id)} key = {todo.id}>{todo.val}</li>
        )
    })) : (<p>You have no todo's left</p>)

    return (
        <ul>
            {todoList}
        </ul>
    )
}
export default Items
