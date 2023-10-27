import { type Todo } from '../types'
import { useState, useEffect } from 'react'

import { AddTodo, GetTodos, CompleteTodo } from '../services/supabase'

export const useTodos = (): {
  onClickFilter: (FilterType: string) => Todo [] | null
  addTodo: (event: React.FormEvent<HTMLFormElement>) => void
  onClickTodoComplete: (todoid: number) => void
  todosFiltered: Todo[] | null
} => {
  const [todos, setTodos] = useState<Todo[] | null>([])
  const [todosFiltered, setTodosFiltered] = useState<Todo[] | null>(todos)

  const onClickFilter = (FilterType: string): Todo[] | null => {
    const filter = todos?.filter((todo) => {
      if (FilterType === 'Completed') return todo.completed
      if (FilterType === 'Active') return !todo.completed
      if (FilterType === 'All') return todos
      return todo
    })
    if (filter != null) {
      setTodosFiltered(filter)
      return todos
    }
    return null
  }

  const addTodo = (event: React.FormEvent<HTMLFormElement>): void => {
    console.log('ejecuta')
    event.preventDefault()
    const elements = event.target as typeof event.target & {
      text: { value: string }
    }
    const text = elements.text.value
    AddTodo(text)
      .then(() => {
        GetTodos()
          .then((test) => { setTodos(test) })
          .catch((error) => { console.log(error) })
      })
      .catch((error) => { console.log(error) })

    // setTodos((prev) => [
    //   ...prev,
    //   {
    //     id: prev.length + 1,
    //     title: text,
    //     description: 'none',
    //     completed: false
    //   }
    // ]
    // )

    elements.text.value = ''
  }

  useEffect(() => {
    GetTodos()
      .then((test) => { setTodos(test) })
      .catch((error) => { console.log(error) })
  }, [])

  useEffect(() => {
    setTodosFiltered(todos)
  }, [todos])

  const onClickTodoComplete = (todoid: number): void => {
    const newState = todos?.map(obj => {
      if (obj.id === todoid) {
        CompleteTodo(todoid)
          .then((final) => { console.log(final) })
          .catch((err) => { console.log(err) })
        return { ...obj, completed: !obj.completed }
      }
      return obj
    })
    if (newState != null) {
      setTodos(newState)
    }
  }
  return {
    todosFiltered, onClickFilter, addTodo, onClickTodoComplete
  }
}
