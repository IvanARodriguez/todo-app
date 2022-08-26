import React from 'react'
import { Todo } from '../model'
import { SingleTodo } from './SingleTodo'
import './styles.css'

interface Props {
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}

export const TodoList = ({ todos, setTodos }: Props) => {
  return (
    <div className='container'>
      <div className='todos'>
        <span className='todos_heading'>Active</span>
        {todos.map(task => (
          <SingleTodo
            todo={task}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </div>
      <div className='todos remove'>
        <span className='todos_heading progress'>In Progress</span>
      </div>
    </div>
  )
}
