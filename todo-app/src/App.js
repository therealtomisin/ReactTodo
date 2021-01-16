import React, {useState} from 'react'
import './App.css';
import Header from './components/Header'
import Adding from './components/Adding'
import Items from './components/Items'
import Nav from './components/Nav'

function App() {

  const [text, setText] = useState('Hey, here\'s your ToDo App, I\'m sure you\'ve got stuff to do!')
  const [todos, setTodos] = useState([])

  const addTodo = (value) => {
    value.id = Math.random()
    setTodos([...todos, value])
  }

  const deleteTodo = (id) => {
    const newTodo = todos.filter(todo=>{
     return todo.id !== id
    })
    setTodos(newTodo)
  }

    const clearTodo = () => {
      setTodos([])
    }

  return (
    <div className="App">
      <Nav />
      <Header text = {text}/>
      <Adding todos = {todos} addTodo = {addTodo} />
      <Items todos = {todos} deleteTodo = {deleteTodo}/>
      <div className = 'clear' onClick = {clearTodo}>
        <span>Clear Todos</span>
      </div>
    </div>
  );
}

export default App;
