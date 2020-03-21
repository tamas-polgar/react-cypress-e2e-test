import React, { useState } from 'react'
import Todo from './component/Todo'
import TodoForm from './component/TodoForm'
import './App.css'

const App = () => {
  const [todos, setTodos] = useState([
    {
      text: 'React Hooks',
      isCompleted: false
    },
    {
      text: 'Redux-saga',
      isCompleted: false
    },
    {
      text: 'Cypress.io',
      isCompleted: false
    }
  ])

  const addTodo = text => {
    const newTodos = [...todos, { text }]
    setTodos(newTodos)
  }

  const completeTodo = index => {
    const newTodos = [...todos]
    newTodos[index].isCompleted = !newTodos[index].isCompleted
    setTodos(newTodos)
  }

  const removeTodo = index => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  return (
    <div className='app'>
      <div className='todo-list'>
        <h1 className='title'>React Todo</h1>
        {todos.map((todo, index) => {
          return (
            <Todo
              key={index}
              index={index}
              todo={todo}
              completeTodo={completeTodo}
              removeTodo={removeTodo}
            />
          )
        })}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  )
}

export default App
