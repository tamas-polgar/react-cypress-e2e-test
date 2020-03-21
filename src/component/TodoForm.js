import React, { useState } from 'react'

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    if (!value) {
      return
    }
    addTodo(value)
    setValue('')
  }

  const handleValChange = event => {
    setValue(event.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        className='input'
        value={value}
        onChange={handleValChange}
        placeholder='Input task'
        autoFocus
      />
    </form>
  )
}

export default TodoForm
