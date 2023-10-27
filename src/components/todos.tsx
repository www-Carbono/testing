import React from 'react'
import { type Todo } from '../types'
interface Props {
  todosFiltered: Todo[] | null
  onClickTodoComplete: (todoid: number) => void
}

export const Todos: React.FC<Props> = ({ todosFiltered, onClickTodoComplete }) => {
  return (
    todosFiltered?.map((todo) => {
      return (
                <div key={todo.id}>
                  <p onClick={() => { onClickTodoComplete(todo.id) } } className={todo.completed ? 'completed' : ''}>{todo.title}</p>
                </div>
      )
    })

  )
}
