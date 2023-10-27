import React from 'react'
import './App.css'

import { Input } from './components/input'
import { Todos } from './components/todos'
import { Filters } from './components/filters'

import { useTodos } from './hooks/useTodos'

export const App: React.FC = () => {
  const { onClickTodoComplete, todosFiltered, addTodo, onClickFilter } = useTodos()

  return (
    <>
    <Input addTodo={addTodo}/>
    <div>
    <Todos onClickTodoComplete={onClickTodoComplete} todosFiltered={todosFiltered}/>
    </div>
    <div>
    <Filters onClickFilter={onClickFilter}/>
    </div>
    </>
  )
}

export default App
