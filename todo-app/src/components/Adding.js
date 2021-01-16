import React, {useState} from 'react'

function Adding(props) {

    const [value, setValue] = useState({id: '', val: ''})

    const handleChange = (e) => {
        setValue({...value, val: e.target.value})
    }

    const submitForm = (e) => {
        props.addTodo(value)
        setValue({id: '', val: ''})
        e.preventDefault()
    }

    return (
        <div>
            <form onSubmit = {(e)=>submitForm(e)}>
                <input className = 'todo-input' type='text' value = {value.val} onChange = {(e)=>handleChange(e)}/>
                <input className = 'submit' type= 'submit' value = 'Submit' />
            </form>
        </div>
    )
}

export default Adding
