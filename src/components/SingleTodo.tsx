import { Todo } from '../model'
import React from 'react'
import { FiEdit, FiTrash2 } from 'react-icons/fi'
import { MdDone } from 'react-icons/md'

type Props = {
  todo: Todo
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

export const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  return (
    <form className='todos_single'>
      <span className='todos_single_text'>{todo.todo}</span>
      <div>
        <span className='icon'>
          <FiEdit />
        </span>
        <span className='icon'>
          <FiTrash2 />
        </span>
        <span className='icon'>
          <MdDone />
        </span>
      </div>
    </form>
  )
}
