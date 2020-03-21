import React from 'react'
import { MdClose } from 'react-icons/md'
import { FiCheckCircle } from 'react-icons/fi'

const Todo = ({ todo, index, completeTodo, removeTodo }) => {
  let style = {
    textDecoration: todo.isCompleted ? 'line-through' : ''
  }
  const handleComplete = () => {
    completeTodo(index)
  }

  const handleRemove = () => {
    removeTodo(index)
  }

  return (
    <div className='todo' style={style}>
      <div>
        <span onClick={handleComplete} className='btn-check'>
          {todo.isCompleted ? <FiCheckCircle /> : <FiCheckCircle />}
        </span>
        {todo.text}
      </div>

      <MdClose onClick={handleRemove} className='btn-close' />
    </div>
  )
}

export default Todo
