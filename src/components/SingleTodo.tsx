import { Todo } from '../model'
import React from 'react'

type Props = {
  todo: Todo
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

export const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  return (
    <form className='todos_single'>
      <span className='todos_single_text'>{todo.todo}</span>
    </form>
  )
}
