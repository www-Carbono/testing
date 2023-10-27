import React from 'react'

interface Props {
  addTodo: (event: React.FormEvent<HTMLFormElement>) => void
}
export const Input: React.FC<Props> = ({ addTodo }) => {
  return (
        <form onSubmit={(event) => { addTodo(event) }}>
        <input type='input' placeholder='Inserta Tarea' id='text' name='text'/>
        <button>Añadir Tarea</button>
        </form>
  )
}
